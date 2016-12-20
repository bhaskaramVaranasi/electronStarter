import {app, BrowserWindow}  from 'electron';
import { join } from 'path';
import { format } from 'url';

const currentDir = __dirname;

class ElectronApplication{
    private mainWindow: any; // change the type to BrowserWindow if it exists
    constructor(){
        this.activateFunction = this.activateFunction.bind(this);
        this.windowAllClosedFunction = this.windowAllClosedFunction.bind(this);
        this.attachEventListeners();
    }

    createWindow(){
        this.mainWindow = new BrowserWindow({width: 800, height: 900});
        let pathname = join(currentDir,'index.html');
        this.mainWindow.loadURL(format({
            pathname: pathname,
            protocol: 'file',
            slashes: true
        }));
        this.mainWindow.webContents.openDevTools();
        this.mainWindow.on('closed',()=>{
            this.mainWindow = null;
        })
    }

    windowAllClosedFunction(){
        if(process.platform !== 'darwin'){
            app.quit();
        }
    }
    activateFunction(){
        if(this.mainWindow === null){
            this.createWindow();
        }
    }

    attachEventListeners(){
        app.on('ready',this.createWindow);
        app.on('window-all-closed',this.windowAllClosedFunction)
        app.on('activate',this.activateFunction);
    }
}

let main: Function = ()=>{
    console.log('Main function is called');
    let application: ElectronApplication = new ElectronApplication();
}

main();