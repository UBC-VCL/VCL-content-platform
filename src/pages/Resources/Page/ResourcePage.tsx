import './ResourcePage.css'
import { RouteComponentProps } from "react-router-dom";
import RESOURCES from '@statics/resources';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddResource from './AddResource/AddResource';
import { createResource, deleteResource, getAllResourcesInCategory } from '@services/adapters/resourceAdapter';
import { Resource, ResourceRequestBody } from '@entities/Resource';
import { Button, CircularProgress, Dialog, DialogTitle } from "@mui/material";
import { TEXT } from '@statics';
import Alert from "@mui/material/Alert";
import { useAppSelector } from '@redux/hooks';
import { selectAuth, selectIsLoggedIn } from '@redux/slices/AuthRedux';
import DeleteIcon from '@mui/icons-material/Delete';

interface MatchParams {
    resource_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> { }
const ResourcePage: React.FC<ProjectProps> = ({ match }) => {

    const history = useHistory();
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const currentResource = RESOURCES.find((resource) => resource.name === match.params.resource_id);

    // If the reuqest for the list of timelines is successful then success = true,
    //  else success = false with "success" defaulted to true
    const [success, setSuccess] = useState<boolean>(true);
    const [categoryHeaders, setCategoryHeaders] = useState<string[]>([]);
    const [resources, setResources] = useState<Resource[][]|null>(null);
    const [navHeight, setNavHeight] = useState<number>(0);
    const [isAddMenuVisible, setAddMenuVisible] = useState<boolean>(false);

    const handleGetAllResourcesInCategory = (category: string) => {
        getAllResourcesInCategory(category)
        .then((res) => {
            if (res.data) {
                var newCategoryHeaderArr: string[] = [];
                res.data.forEach((subCatArr) => {
                    newCategoryHeaderArr.push(subCatArr[0].category.sub);
                });
                setCategoryHeaders(newCategoryHeaderArr);
                setResources(res.data);
            } else {
                console.log(res.error);
            }
        })
        .catch(() => {
            setSuccess(false);
            console.error('Error: resourceService.ts getAllResourcesInCategory call');
        })
    }

    const { access_token, username } = useAppSelector(selectAuth);
    const [message, setMessage] = useState<string>('');
    const [dialogMessage, setDialogMessage] = useState<string>('');
    const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
    const [resourceToDelete, setResourceToDelete] = useState<string>('');

    const handleCreateResource = async (reqBody: ResourceRequestBody): Promise<boolean> => {
        const result = await createResource(reqBody, access_token)
        .then((res) => {
            if (res.error) {
                setMessage(res.message);
                console.log(res.error);
                console.log(res);
                return false;
            } else {
                if (resources) {
                    var resourceAddedToSubCategory = false;
                    for (var i = 0; i < resources.length; i++) {
                        if (resources[i][0].category.sub === res.data?.category.sub) {
                            resources[i].unshift(res.data);
                            resourceAddedToSubCategory = true;
                            break;
                        }
                    }
                    if (!resourceAddedToSubCategory && res.data) {
                        resources.push([res.data]);
                        setCategoryHeaders([...categoryHeaders, res.data.category.sub]);
                    }
                    setMessage(res.message);
                    return true;
                }
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
            setMessage("Something went wrong while trying to create the new resource");
            return false;
        })
        return result;
    }

    const initDeleteResourceProcess = (e: React.MouseEvent<HTMLDivElement>) => {
        const resourceId = (e.currentTarget as HTMLElement).dataset.id;
        if (resourceId) {
            setDialogMessage('');
            setOpenDeleteDialog(true);
            setResourceToDelete(resourceId);
        }
    }

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
        setResourceToDelete('');
    }

    const handleDeleteResource = () => {
        if (resourceToDelete) {
            deleteResource(resourceToDelete, username, access_token)
            .then((res) => {
                if (res.error) {
                    setDialogMessage(res.message);
                    console.log(res.error);
                } else {
                    setDialogMessage(res.message);
                    handleGetAllResourcesInCategory(match.params.resource_id);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        // error handling for pages that do not exist yet
        if (currentResource === undefined) {
            // throw new Error('Resource not found');
            history.push('/');
        }

        // to keep track of the height of the navbar

        if (window.innerWidth <= 700) {
            setNavHeight(document.getElementById("mobile-navbar-container")!.offsetHeight);
        } else {
            setNavHeight(document.getElementById("nav")!.offsetHeight);
        }
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
        handleGetAllResourcesInCategory(match.params.resource_id);
    }, [match])

    return (
        <>
            {currentResource && isAddMenuVisible && 
                <AddResource 
                    isVisible={isAddMenuVisible} 
                    setVisible={setAddMenuVisible} 
                    resourceCategory={match.params.resource_id}
                    subcategories={currentResource.subcategories}
                    message={message}
                    handleSubmit={handleCreateResource}
                />
            }
            <Dialog
                className='delete-dialog-container'
                open={openDeleteDialog}
                onClose={handleDeleteDialogClose}
            >
                <DialogTitle className='delete-dialog-title'>{dialogMessage || 'Are you sure you want to delete this resource?'}</DialogTitle>
                {!dialogMessage && 
                    <div className='delete-dialog-buttons-container'>
                        <Button onClick={handleDeleteResource}>Delete</Button>
                        <Button onClick={handleDeleteDialogClose}>Cancel</Button>
                    </div>
                }
            </Dialog>
            <div style={{ filter: isAddMenuVisible ? 'blur(10px)' : 'blur(0px)', transition: 'all 0.5s ease-in-out', }}>
                <div className='resource-page-container' style={{ marginTop: navHeight }}>
                    <div className='resource-page-title-container'>
                        <h1 className='resource-page-title'>
                            {currentResource?.page_title}
                        </h1>
                    </div>
                    {success &&
                        <div className='resource-content-containers' style={{ gridTemplateColumns: `repeat(${categoryHeaders.length}, 1fr)` }}>
                            {
                                categoryHeaders.map((title, index) => {
                                    return (
                                        <div className='single-resource-content-section' key={index} style={{ borderRight: `${index != categoryHeaders!.length - 1 ? "2px solid #000" : ""}` }}>
                                            <div className='single-resource-grid-item' id={title}
                                                onClick={() => {
                                                    window.scrollTo({
                                                        top: document.getElementById(`resource-content-single-render-${title}`)?.offsetTop,
                                                        behavior: 'smooth'
                                                    });
                                                }}
                                            >
                                                {title}
                                            </div>
                                        </div>
                                    );
                                })
                                    // <div className='single-resource-content-section'>
                                    //     <div className='single-resource-grid-item'
                                    //         id='older-content'
                                    //         onClick={() => {
                                    //             window.scrollTo({
                                    //                 top: document.getElementById("resource-content-single-render-olderContent")?.offsetTop,
                                    //                 behavior: 'smooth'
                                    //             });
                                    //         }}
                                    //     >
                                    //         Older Content
                                    //     </div>
                                    // </div>
                            }
                        </div>
                    }
                </div>
                <div className='resource-content-render-container'>
                    {success ? 
                        (resources ? 
                            (resources.length !== 0 ? 
                                (resources.map((resourcesOfSubCat, index) => {
                                    return (
                                        <>
                                            <div className='resource-content-single-render-category' key={index} id={`resource-content-single-render-${resourcesOfSubCat[0].category.sub}`}>
                                                <h1 className='resource-content-single-render-category-title'
                                                >
                                                    {resourcesOfSubCat[0].category.sub}
                                                </h1>
                                            </div>
                                            <div className='resource-content-single-render-category-content'>
                                                {
                                                    resourcesOfSubCat.map((resource, index) => {
                                                        return (
                                                            <div className='resource-content-single-render' key={index}>
                                                                <div className='resource-content-single-render-image-container'>
                                                                    <img src={''} alt='NO IMAGE' id="resource-content-single-render-image"></img>
                                                                </div>
                                                                <div className='resource-content-single-render-text-container'>
                                                                    <div className='resource-title-container'>
                                                                        <a href={resource.resource_link.includes('://') ? resource.resource_link : "//" + resource.resource_link} target='_blank' rel="noopener noreferrer">
                                                                            {resource.title}
                                                                        </a>
                                                                        {resource.owner.username === username && 
                                                                            <div onClick={initDeleteResourceProcess} data-id={resource._id}>
                                                                                <DeleteIcon/>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    <div className='resource-content-single-render-text-names-container'>
                                                                        {resource.author}
                                                                        {/* {
                                                                            resource.author.map((name, index) => {
                                                                                return index !== resource.author.length - 1 ? <h2>{name}, &nbsp;</h2> : <h2>{name}</h2>
                                                                            })
                                                                        } */}
                                                                    </div>
                                                                    <p>
                                                                        {resource.description}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                })) : (
                                    <Alert severity="error" className="resource-page-prompt-string">
                                        {TEXT.RESOURCE_PAGE.EMPTY_DISPLAY_LIST}
                                    </Alert>  
                                )
                            ) : (
                                <CircularProgress></CircularProgress>
                            )
                        ) : (
                            <Alert severity="error" className="resource-page-prompt-string">
                                {TEXT.RESOURCE_PAGE.RESPONSE_ERROR}
                            </Alert>
                        )
                                // <div className='resource-content-single-render-category'>
                                //     <h1 className='resource-content-single-render-category-title' id="resource-content-single-render-olderContent">
                                //         Older Content
                                //     </h1>
                                // </div>
                    }
                </div>
                {success && isLoggedIn &&
                    <div className='add-resource-button-container'
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        setAddMenuVisible(true);
                        setMessage('');
                    }}>
                        Add New Resource
                    </div>
                }
            </div>
        </>
    );
};

export default ResourcePage;