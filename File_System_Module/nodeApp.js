const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs=require('fs');
var filename="";
var content="";
var directoryName="";
var removeDName="";
var renamefile="";

var createFile=()=>{
    fs.writeFile(filename,content,(err)=>{
        if(err){
            console.log(err);
        }
        else
        {
            console.log("File Created Successfully");
        }
        reapet();
    });
};
var createDirectory=()=>{
    fs.mkdirSync(directoryName,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Directory Created.");
        }
    });
    reapet();
};
var createDirectoryWizard=()=>{
    rl.question("Enter Name of the Directory to Create :",(ans)=>{
        directoryName=ans;
        createDirectory();
    });
};
var removeDirectory=()=>{
    fs.rmdir(removeDName,function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Directory Removed.");
        }
        reapet();
    });
    
};
var removeDirectoryWizard=()=>{
    rl.question("Enter Name for Remove Directory :",(ans)=>{
        removeDName=ans;
        removeDirectory();
    })
}
var createFileWizard=()=>{
    rl.question("Enter Name of the File :",(ans)=>{
        filename=ans + ".txt";
        rl.question("Enter Content of the File :",(ans)=>{
            content=ans;
            createFile();
        });
    });
};
var readFile=()=>{
    fs.readFile(filename,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
        reapet();
    });
};
var readFileWizard=()=>{
    rl.question("Enter Name for the Read File :",(ans)=>{
        filename=ans;
        readFile();
    });
};
var appendFile=()=>{
    fs.appendFile(filename,content,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("File Apended.");
        }
        reapet();
    })
};
var appendToFileWizard=()=>{
    rl.question("Enter File Name To Append :",(ans)=>{
        filename=ans;
        rl.question("Enter Content To Append :",(ans)=>{
            content=ans;
            appendFile();
        });
    });
    
};
var renameFile=()=>{
    fs.rename(filename,renamefile,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Renamed.");
        }
        reapet();
    });
}
var renameFileWizard=()=>{
    rl.question("Enter File Name which you want to Rename :",(ans)=>{
        filename=ans;
        rl.question("Enter New File Name :",(ans)=>{
            renamefile=ans;
            renameFile();
        });
    });
};
var deleteFile=()=>{
    fs.unlink(filename,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Deleted.");
        }
        reapet();
    });
};
var deleteFileWizard=()=>{
    rl.question("Enter FileName to Delete :",(ans)=>{
        filename=ans;
        deleteFile();
    });
};
var upateFile=()=>{
    fs.writeFile(filename,content,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("File Updated.");
        }
        reapet();
    })
}
var updateFileWizard=()=>{
    rl.question("Enter File Name for Update :",(ans)=>{
        filename=ans;
        rl.question("Enter Content :",(ans)=>{
            content=ans;
            upateFile();
        })
    })
}

var instruction=()=>{
    console.log("\nEnter 1 for Create Directory :");
    console.log("Enter 2 for Remove Directory :");
    console.log("Enter 3 for Create (Write) File");
    console.log("Enter 4 for Read Content of File :");
    console.log("Enter 5 for Append to an exsiting File :");
    console.log("Enter 6 for Rename File :");
    console.log("Enter 7 for Delete File :");
    console.log("Enter 8 for Update File :");
    console.log("Enter 9 for Exit :");
}
var start=()=>{
    rl.question("Enter Your Choice :",(ch)=>{
        if(ch==="1")
        {
            createDirectoryWizard();
        }
        else if(ch==="2")
        {
            removeDirectoryWizard();
        }
        else if(ch==="3")
        {
            createFileWizard();
        }
        else if(ch==="4")
        {
            readFileWizard();
        }
        else if(ch==="5")
        {
            appendToFileWizard();
        }
        else if(ch==="6")
        {
            renameFileWizard();
        }
        else if(ch==="7")
        {
            deleteFileWizard();
        }
        else if(ch==="8")
        {
            updateFileWizard();
        }
        else if(ch==="9")
        {
            rl.close();
        }
        else
        {
            console.log("Wrong Choice.Please try again.");
            start();
        }
    });
};
var reapet=()=>{
    instruction();
    start();
}
reapet();