import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import game_dev from './game_dev.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Backend from './Backend.png'
import level_design from './Level_design.png';
import open_source from './open_source.png';
import unreal_engine from './unreal_engine.png';
import unity from  './unity.png';
import blender from './blender.png';
import sql from './mysql.png';
import postman from './postman.png';
import photoshop from './photoshop.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    game_dev,
    open_source,
    level_design,
    Backend,
    unreal_engine,
    unity,
    blender,
    sql,
    photoshop,
    postman
};

export const workData = [
    {
        title: 'Backend',
        description: 'Social Media Backend',
        bgImage: '/work-1.png',
        link: 'https://github.com/DrDead0/Nodejs-Express_SocialMedia_Backend.git'
    },
    {
        title: 'Task Manager',
        description: 'Chrome Extension',
        bgImage: '/work-2.png',
        link: 'https://github.com/DrDead0/Task-Manager_Chrome-Extension.git'
    },
    {
        title: 'Digital Dynasty',
        description: '2D Platformer Game',
        bgImage: '/work-3.png',
        link: 'https://github.com/DrDead0/Digital-Dynasty_Unity-Engine.git'
    },
    {
        title: 'Urban Eye',
        description: 'Camera Geolocation Application',
        bgImage: '/work-4.png',
        link: 'https://github.com/DrDead0/urbaneyes.git'
    },
    {
        title: 'G-Orbit',
        description: 'Gamers Community Platform',
        bgImage: '/work-5.png',
        link: 'https://github.com/DrDead0/G-Orbit_Gaming-Community.git'
    },
    {
        title: 'DarkDeity Bot',
        description: 'Automated Discord Bot',
        bgImage: '/work-6.png',
        link: 'https://github.com/DrDead0/DarkDeity_Bot.git'
    },
    {
        title: 'CaptainDeity Bot',
        description: 'Automated Discord Moderation Bot',
        bgImage: '/work-7.png',
        link: 'https://github.com/DrDead0/Captain-Deity_Bot.git'
    },
    {
        title: 'Blender Models',
        description: 'My Blender Collection',
        bgImage: '/work-8.png',
        link: 'https://github.com/DrDead0/Blender-Models.git'
    }
];

export const serviceData = [
    { 
        icon: assets.game_dev, 
        title: 'Game Development', 
        description: 'Developing engaging games using Unity and Unreal Engine, focusing on gameplay mechanics and player experience...', 
        link: 'https://docs.unity3d.com/Manual/index.html' 
    },
    { 
        icon: assets.Backend, 
        title: 'Backend Development', 
        description: 'Creating scalable backend systems with Node.js, handling API development and database management...', 
        link: 'https://nodejs.org/en/docs/' 
    },
    { 
        icon: assets.level_design, 
        title: 'Game Level Design & Content Creation', 
        description: 'Designing immersive game levels and creating engaging content for interactive experiences...', 
        link: 'https://docs.unrealengine.com/5.3/en-US/level-design-in-unreal-engine/' 
    },
    { 
        icon: assets.open_source, 
        title: 'Open Source Contributions', 
        description: 'Contributing to open-source projects, sharing knowledge, and collaborating with developers...', 
        link: 'https://opensource.guide/' 
    },
];

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Tech Stack', 
        description: 'Game Dev: Unity, Unreal Engine, C#, C++\nBackend: Node.js, Express, MongoDB\nWeb: JavaScript, TypeScript, React' 
    },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science', about:"Vellore Institute of Technology " },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: '8+ completed projects including games and web applications' }
];

export const toolsData = [
    assets.unreal_engine, assets.unity, assets.vscode, assets.git, assets.mongodb, assets.blender, assets.postman, assets.sql, assets.figma, assets.photoshop
];