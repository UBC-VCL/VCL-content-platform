interface Affiliations {
    CONTENT: {
        type: string;
        content: {
            title: string;
            href: string;
            pi?: string[];
            faculty?: string[];
            desc?: string;
        }[];
    }[];

};


const AFFILIATIONS: Affiliations = {
    CONTENT: [
        {
            type: "UBC Labs",
            content: [
                {
                    title: "Brain and Attention Research (BAR) Lab",
                    href: "https://barlab.psych.ubc.ca/",
                    pi: ["Alan Kingstone",]
                },
                {
                    title: "Imager Laboratory for Graphics, Visualization, and HCT",
                    href: "https://www.cs.ubc.ca/labs/imager/imager.php",
                    faculty: ["Robert Bridson","Kellogg S. Booth","Wolfgang Heidrich", "Karon MacLean", "Joanna McGrenere", "Tamara Munzner", "Dinesh Pai", "Ronald Rensink", "Alla Sheffer", "Michiel van de Panne"]
                },
                {
                    title: "Memory and Cognition Lab",
                    href: "https://memcoglab.psych.ubc.ca/",
                    pi: ["Peter Graf"]
                },
                {
                    title: "Sensory Perception and Interaction Research Group (SPIN)",
                    href: "https://www.cs.ubc.ca/labs/spin/",
                    pi: ["Karon MacLean"]
                },
                {
                    title: "UBC Vision Lab",
                    href: "https://visionlab.psych.ubc.ca/",
                    pi: ["James T. Enns"]
                },
                
            ]
        },
        {
            type: "Other Universities",
            content: [
                {
                    title: "Perception and Cognition Lab (Yale University)",
                    href: "http://perception.yale.edu.s3-website-us-east-1.amazonaws.com/",
                    pi: ["Brian Scholl",]
                },
                {
                    title: "Saiki Lab (Kyoto University)",
                    href: "http://www.cv.jinkan.kyoto-u.ac.jp/site/",
                    pi: ["Jun Saiki"]
                },
                {
                    title: "Simons Lab (University of Illinois)",
                    href: "http://www.simonslab.com/",
                    pi: ["Daniel J. Simmons"]
                },
                {
                    title: "Vision Sciences Lab (Harvard University)",
                    href: "https://visionlab.harvard.edu/",
                    pi: ["Ken Nakayama", "George Alvarez", "Yaoda Xu", "Patrick Cavanagh"]
                },
                {
                    title: "Visual Attention Lab (Brigham and Women’s Hospital)",
                    href: "https://search.bwh.harvard.edu/new/",
                    pi: ["Jeremy Wolfe", "Todd Horowitz"]
                },
                
            ]
        },
        {
            type: "Affiliated Programs",
            content: [
                {
                    title: "UBC Cognitive Systems Program (COGS)",
                    href: "https://cogsys.ubc.ca/",
                },
                {
                    title: "Media and Graphics Interdisciplinary Centre (MAGIC)",
                    href: "https://www.magic.ubc.ca/",
                },
                {
                    title: "Go Cognitive",
                    href: "https://www.gocognitive.net/",
                    desc: "FREE access to materials for students, educators, and researchers in cognitive psychology and cognitive neuroscience"
                },
                {
                    title: "Vancouver Institute for Visual Analytics (VIVA)",
                    href: "http://viva.sfu.ca/",
                },
                {
                    title: "Andrew Wade VA Challenge Program (VA Challenge)",
                    href: "https://andrewwade.ca/",
                },
                
            ]
        },
    ]
}

export default AFFILIATIONS;