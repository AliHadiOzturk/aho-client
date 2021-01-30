
import React from 'react'
import badges from '../../assets/badges.json'
import me from '../../assets/images/me2.jpg'
import cap from '../../assets/svg/academic-cap.svg'
import briefcase from '../../assets/svg/briefcase.svg'
import discord from '../../assets/svg/discord.svg'
import github from '../../assets/svg/github.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import twitter from '../../assets/svg/twitter.svg'
import { AboutMe, AboutMeItem } from './AboutMe'
import { Badge, BadgeItem } from './Badge'
import { ContactMe } from './ContactMe'
export const Home: React.FC = () => {


    return (
        <div className="home bg-gradient-to-r from-gray-50-300 to-gray-500-700 shadow-2xl ">
            <div className="md:relative container md:mx-auto p-12 h-full">
                <div className="flex flex-col md:flex-row justify-center mx-auto  lg:w-1/2">
                    <img className="rounded-3xl w-48 h-48 self-center" alt="Ali Hadi Öztürk" src={me} />
                    <div className="order-2 md:order-2 self-center">
                        <h1 className="text-2xl font-bold text-center">Hi, I'm Ali Hadi.</h1>
                        <p className="p-4">
                            Hi, my name is Ali Hadi. I'm a developer. I think my self as a problem solver and passioante about learning. I'm currently working as full time developer.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center justify-items-center self-center md:divide-x-2 md:divide-dashed">
                    <div className="order-3 md:order-none">
                        <div className="m-8">
                            <AboutMe>
                                <AboutMeItem leftText="Experience"
                                    subTitle="ArveOn"
                                    svg={briefcase}
                                    timePeriod="May 2018 - Current"
                                    title="FullStack Developer"
                                    description="Work in various projects that inclued Angular, .Net Core, Spring">
                                </AboutMeItem>
                                <AboutMeItem leftText="Education"
                                    subTitle="Ufuk University"
                                    svg={cap}
                                    timePeriod="2016 - 2018"
                                    title="Computer Programming"
                                    description="" />
                            </AboutMe>
                        </div>
                        <div></div>
                    </div>
                    {/* Hi, my name is Ali Hadi. I'm a developer. I think my self as a problem solver and passioante about learning. I'm currently working as full time developer.  */}
                    <div className="flex flex-col order-1 md:order-none justify-items-center h-auto pt-5 md:pl-5">
                        <Badge title="Programming Languages">

                            <BadgeItem altText="typescript" src={badges.typescript} />
                            <BadgeItem altText="javascript" src={badges.javascript} />
                            <BadgeItem altText="c#" src={badges.csharp} />
                            <BadgeItem altText="java" src={badges.java} />
                            <BadgeItem altText="python" src={badges.python} />

                        </Badge>
                        <Badge title="Frameworks/Libraries">

                            <BadgeItem altText="angular" src={badges.angular} />
                            <BadgeItem altText="react" src={badges.react} />
                            <BadgeItem altText="react native" src={badges.reactnative} />
                            <BadgeItem altText="xamarin" src={badges.xamarin} />
                            <BadgeItem altText="electron" src={badges.electron} />
                            <BadgeItem altText="tailwindcss" src={badges.tailwindcss} />
                            <BadgeItem altText="spring" src={badges.spring} />
                            <BadgeItem altText="nodejs" src={badges.nodejs} />
                            <BadgeItem altText="asp.net core" src={badges.aspnet} />
                        </Badge>

                        <Badge title="Tools">
                            <BadgeItem altText="vs code" src={badges.vscode} />
                            <BadgeItem altText="vs" src={badges.vs} />
                            <BadgeItem altText="git" src={badges.git} />
                            <BadgeItem altText="github" src={badges.github} />
                        </Badge>

                        <Badge title="Technologies">
                            <BadgeItem altText="firefox" src={badges.firefox} />
                            <BadgeItem altText="postgresql" src={badges.postgresql} />
                            <BadgeItem altText="linux" src={badges.linux} />
                            <BadgeItem altText="windows" src={badges.windows} />
                            <BadgeItem altText="azure" src={badges.azure} />
                            <BadgeItem altText="aws" src={badges.aws} />
                        </Badge>
                    </div>
                </div>
                <div className="contact-me-footer md:absolute md:bottom-0 flex flex-col sm:grid sm:grid-cols-2 pb-4  self-center lg:flex lg:flex-row ">
                    <ContactMe url="https://github.com/AliHadiOzturk"
                        isFirst
                        imageAltText="github"
                        image={github}
                        isLink
                        username="AliHadiOzturk" />
                    <ContactMe url="https://twitter.com/AliHadiOzturk"
                        imageAltText="twitter"
                        image={twitter}
                        isLink
                        username="AliHadiOzturk" />
                    <ContactMe url="https://www.linkedin.com/in/alihadiozturk/"
                        imageAltText="linkedin"
                        image={linkedin}
                        isLink
                        username="AliHadiOzturk" />
                    <ContactMe
                        imageAltText="discord"
                        image={discord}
                        username="alihadiozturk#9516" />
                </div>
            </div>
        </div>
    )

}