import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native.js'

Parse.setAsyncStorage(AsyncStorage)
// TODO: replace with js key
Parse.initialize('prepto-app', '', 'infosys_mein_job_lagwado')

Parse.serverURL = 'http://13.126.2.176:1337/parse'
const client = new Parse.LiveQueryClient({
  applicationId: 'prepto-app',
  serverURL: 'ws://13.126.2.176:1337', // Example: 'wss://livequerytutorial.back4app.io'
  javascriptKey: '',
  masterKey: 'infosys_mein_job_lagwado',
})
client.open()

export const LiveTest = Parse.Object.extend('LiveTest')
export async function main() {
  const lt = new LiveTest()
  lt.set('prop', 'fkoff')

  console.log('from parse', await lt.save())
}

export default Parse
