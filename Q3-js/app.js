function validateJson(str){
    try {
        let user = JSON.parse(str);
        if (!user.name || !user.age){
            throw new Error("Incomplete data");
        }
        console.log(user.name);
        console.log(user.age);
    } catch (err) {
        console.log(err);
    }
}
let json = '{ "name":"John", "age":30}';
validateJson(json);
let json2 = '{ "name":"John"}';
validateJson(json2);
