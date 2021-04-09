import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button 
      type="button"
      className={styles.button}
      color="#04d361"
    >
      <FaGithub />
      Ian Carlos
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.button}
      color="#eba417"
    >
      <FaGithub />
      Sign in with Github
    </button>
  )
}