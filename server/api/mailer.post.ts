import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: config.MAILER_SERVICE,
    auth: {
      user: config.MAILER_USER,
      pass: config.MAILER_PASS
    }
  })

  const body = await readBody(event)

  try {
    await transporter.sendMail({
      subject: 'SPINZ.GG | Contact form',
      from: config.MAILER_USER,
      to: config.MAILER_RECIPIENT,
      text: `FROM: ${body.name}\nEMAIL: ${body.email}\nMESSAGE: ${body.message}`
    })

    return { success: true }
  } catch (error) {
    return { error }
  }
})
