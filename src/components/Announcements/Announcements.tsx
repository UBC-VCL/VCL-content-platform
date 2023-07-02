import "./Announcements.css";

interface AnnouncementContent {
    content: string,
}

const defaultProps: AnnouncementContent = {
    content: '',
}

const Announcements = ({ content }: AnnouncementContent) => {
  return (
    content === '' ? <div hidden/> :
    <div className="banner">
        <div className='banner-text'><b>Announcements:&nbsp;</b>{content}</div>
    </div>
  );
};

Announcements.defaultProps = defaultProps;

export default Announcements;