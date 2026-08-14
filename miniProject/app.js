const fs = require("fs")

const[a, b, operation, filename, data] = process.argv

try {
    if(!operation || !filename)
    {
        throw new Error("Please enter operation and file name")
    }

    switch(operation){
        case "create" :
            if(!data)
            {
                throw new Error("Data field is required")
            }
            fs.writeFileSync(filename, data)
            console.log("File created successfully...")
            break;

        case "read" :
           const val = fs.readFile(filename, "utf-8")
           console.log(val)
           break;

        case "update" :
            if(!data){
                throw new Error("Data field is required")
            }
            fs.appendFileSync(filename, data)
            console.log("update successfully...")
            break;

        case "delete" :
            fs.unlinkSync(filename)
            console.log("file delete successfully....")
            break;
        
        default :
          console.log("Invalid operation")
    }
} 
catch (error) {
    console.log(error.message)
}