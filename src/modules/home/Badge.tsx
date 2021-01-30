export interface BadgeProps {
    title: string;
}
export interface BadgeItemProps {
    src: string;
    altText: string;
}
export const Badge: React.FC<BadgeProps> = ({ title, children }) => {
    return (
        <div className="mt-2">
            <h1 className="font-bold text-lg">{title}</h1>
            <div className="flex flex-row flex-wrap h-auto">
                {children}
            </div>
        </div>
    );
}


export const BadgeItem: React.FC<BadgeItemProps> = ({ altText, src }) => {
    return (
        <img className="h-5 ml-1 mt-1" alt={altText} src={src} />
    );
}