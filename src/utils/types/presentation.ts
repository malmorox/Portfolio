type Socials = {
    label: string;
    link: string;
};

type Presentation = {
    mail: string;
    title: string;
    description: string;
    socials: Socials[];
    profile?: string;
};