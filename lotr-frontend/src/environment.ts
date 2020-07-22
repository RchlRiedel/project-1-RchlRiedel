
export let lotrBaseUrl:string
//this is the only env we get in front end, and technically anyone that downloads the site can read it 
if(process.env['NODE_ENV'] === 'production'){
    //if we ran npm run build
    //use the deployed address
    lotrBaseUrl = 'http://35.236.234.77:2007'
}else {
    //we are in test or dev, use the local address
    lotrBaseUrl = 'http://localhost:2007'
}