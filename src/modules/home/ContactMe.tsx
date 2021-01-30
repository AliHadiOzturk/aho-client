interface ContactMeProps {
    url?: string;
    image: string;
    imageAltText: string;
    username: string;
    isLink?: boolean;
    isFirst?: boolean;
}
export const ContactMe: React.FC<ContactMeProps> = (props) => {
    const { image, imageAltText, url, isLink, isFirst, username } = props;
    return (
        isLink ? (
            <a href={url} target="_blank" rel="noreferrer" className={`flex flex-row cursor-pointer self-center p-4 lg:p-0 ${isFirst ? '' : 'lg:ml-auto'}`} >
                <img className="h-8 w-8 md:h-12 md:w-12" alt={imageAltText} src={image} />
                <p className="md:text-xl ml-1 no-underline text-black text-center self-center">{username}</p>
            </a>) : (
                <div className="flex flex-row self-center p-4 lg:p-0 lg:ml-auto">
                    <img className="h-8 w-8 md:h-12 md:w-12" alt={imageAltText} src={image} />
                    <p className="md:text-xl ml-1 no-underline select-all text-black text-center self-center">{username}</p>
                </div>)
    )
}