
interface AboutMeProps {

}
export const AboutMe: React.FC<AboutMeProps> = ({ children }) => {

    return (
        <ul className="list-none m-0 p-0">
            {children}
        </ul>
    )
}



interface AboutMeItemProps {
    svg: string;
    leftText: string;
    title: string;
    subTitle: string;
    timePeriod: string;
    description: string;
}
export const AboutMeItem: React.FC<AboutMeItemProps> = (props) => {
    return (
        <li className="mb-2 flex ">
            <div className="flex bg-gradient-to-t from-blue-200 to-blue-600 rounded-full h-36 w-10 
                                    justify-center text-center text-white">
                <div className="flex flex-col justify-items-center ">
                    <img className="w-7 self-center pb-10 pt-2" alt="svg" src={props.svg} />
                    <span className="text-gradient transform -rotate-90 font-medium bg-black">{props.leftText}
                    </span>
                </div>
            </div>
            <div className="flex flex-col h-auto justify-items-center self-center divide-y-2 divide-dashed divide-black">
                <div className="flex items-center mb-1 ">
                    <div className="flex-1 ml-4 text-2xl font-bold">{props.title}</div>
                </div>
                <div>
                    <div className="flex-1 ml-4 text-xl font-medium">{props.subTitle}</div>
                    <div className="flex-1 ml-4 ">{props.timePeriod}</div>
                    <div className="flex-1 ml-4 ">{props.description}</div>
                </div>
            </div>
        </li>
    );
}