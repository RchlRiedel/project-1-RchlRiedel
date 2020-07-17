//this is where we set up the cloud storage bucket and the like
import {Storage} from '@google-cloud/storage'

//bucket Name
export const bucketName = '' //CHANGE THIS TO MATCH

//full http path to that bucket (using variable for bucket name so easy to change)
export const bucketBaseUrl = `https://storage.googleapis.com/${bucketName}`


//bucket itself
export const imageBucket = new Storage().bucket(bucketName)