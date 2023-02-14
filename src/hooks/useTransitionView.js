import { useNavigate } from "react-router-dom"
import { playSound } from "../utils/sound"

export const useTransitionView = ()=> {

  const navigate = useNavigate() 

  /*
   * Transition to a new view
   * to: the path to navigate to (route must be declared in App.js)
   * sound: the sound to play (must be in public/sounds folder)
   * className: the class name to add to the document element during the transition
   */
  const transition = ({
    to,
    sound,
    className,
    skipAnimation
  })=> {

    if (sound) playSound(sound)

    /*
     * If the transition API is not supported by the browser,
     * or we choose to skip transition - we just navigate
     */
    if (!document.startViewTransition || skipAnimation) {
      navigate(to)
      return
    }

    // If the startViewTransition API is supported:

    // Pre-work: Add the transition class to the document element
    if (className) document.documentElement.classList.add(className)

    // Actually do the transition, playing a sound if needed
    const transition = document.startViewTransition(() => {
      navigate(to)
    })
    
    // Post-work: Remove the transition class from the document element
    transition.finished.finally(() =>
      document.documentElement.classList.remove(className)
    )

  }

  return transition
}
