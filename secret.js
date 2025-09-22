const {SecretManagerServiceClient } = require('@google-cloud/secret-manager')
const client = new SecretManagerServiceClient()

const getSecret = async (secretName) => {
    const [version] = await client.accessSecretVersion({
        name: `projects/521219442824/secrets/${secretName}/versions/latest`
    })
    return version.payload.data.toString()
}

module.exports = getSecret
