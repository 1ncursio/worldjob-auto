import { Webhook } from 'discord-webhook-node'

const createHook = () => {
  const { DISCORD_WEBHOOK_URL, DISCORD_IMAGE_URL, DISCORD_USERNAME } = process.env

  if (!DISCORD_WEBHOOK_URL) throw new Error('DISCORD_WEBHOOK_URL is not defined')
  if (!DISCORD_IMAGE_URL) throw new Error('DISCORD_IMAGE_URL is not defined')
  if (!DISCORD_USERNAME) throw new Error('DISCORD_USERNAME is not defined')

  const hook = new Webhook(DISCORD_WEBHOOK_URL)
  hook.setUsername(DISCORD_USERNAME)
  hook.setAvatar(DISCORD_IMAGE_URL)

  return hook
}

const hook = createHook()

export default hook
