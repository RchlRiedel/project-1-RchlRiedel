
//send topics
import { PubSub } from "@google-cloud/pubsub"

const pubSubClient = new PubSub()

//create topic if it doesn't exist, otherwise get the topic with topic you the topic
export const userTopic = pubSubClient.topic('projects/gifted-pulsar-279818/topics/project-1-topic')
//this is fine (comments in demos for "more accurate" data)
//this is where we are sending messages (for new and updated users)

//call topic, or use funtion to get topics and search through them for the one we want, then set it to topic name
//see lightlyburinging demos