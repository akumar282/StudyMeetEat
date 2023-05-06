import { Auth } from 'aws-amplify'

export interface CustomAttribute {
  name: string
  value: string
}

export async function newUserSignUp(username: string, password: string, email: string, userId: string): Promise<string> {
  try {
    const newUser = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        'custom:userId': userId
      },
      autoSignIn: {
        enabled: true
      }
    })
    return 'Success'
  } catch (error) {
    console.error('Sign up failed!', error)
    return 'Failed'
  }
}

export async function getCurrentUserAttributes(): Promise<CustomAttribute[]> {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const customAttributes: CustomAttribute[] = Object.entries(user.attributes)
      .filter(([key, value]) => key.startsWith('custom:'))
      .map(([key, value]) => ({
        name: key.substring('custom:'.length),
        value: value as string
      }))
    return customAttributes
  } catch (error) {
    console.log('Error getting user attributes: ', error)
    return []
  }
}

export async function changeUserPassword(props: {
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
}): Promise<void> {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, props.oldPassword, props.confirmPassword);
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}