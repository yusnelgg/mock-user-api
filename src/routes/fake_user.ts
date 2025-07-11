import { Router } from 'express'
import { faker } from '@faker-js/faker'

const router = Router()

router.get('/', (req, res) => {
  const fake_user = {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 80 }),
    email: faker.internet.email(),
    bio: `A ${faker.person.jobTitle()} from ${faker.location.country()} who loves ${faker.animal.type()}.`
  }

  res.json(fake_user)
})

export default router
