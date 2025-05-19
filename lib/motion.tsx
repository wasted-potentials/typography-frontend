
import React, { useRef, useEffect, useState } from 'react'

type MotionProps<T extends React.ElementType> = React.ComponentPropsWithRef<T> & {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface AnimationOptions {
  duration?: number
  delay?: number
  ease?: string
}

export function motion<T extends React.ElementType>(Component: T) {
  return function Motion({
    initial,
    animate,
    exit,
    transition,
    whileInView,
    viewport,
    children,
    ...props
  }: MotionProps<T>): JSX.Element {
    const ref = useRef<HTMLElement>(null)
    const [style, setStyle] = useState<React.CSSProperties>({})
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
      if (initial) {
        setStyle(transformProps(initial))
      }

      if (animate) {
        const timer = setTimeout(() => {
          setStyle({
            ...transformProps(animate),
            transition: createTransition(transition)
          })
        }, (transition?.delay || 0) * 1000)

        return () => clearTimeout(timer)
      }
    }, [initial, animate, transition])

    useEffect(() => {
      if (!whileInView || !ref.current) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
            setStyle({
              ...transformProps(whileInView),
              transition: createTransition(transition)
            })

            if (viewport?.once) {
              observer.disconnect()
            }
          } else if (!entry.isIntersecting && !viewport?.once && isInView) {
            setIsInView(false)
            setStyle(transformProps(initial || {}))
          }
        },
        {
          threshold: viewport?.threshold || 0,
          rootMargin: viewport?.margin || '0px',
        }
      )

      observer.observe(ref.current)

      return () => observer.disconnect()
    }, [whileInView, initial, transition, viewport, isInView])

    const component = <><Component {...props} ref={ref} style={{...props.style, ...style}}>
      {children}
    </Component></>;
    return component
  }
}

function transformProps(props: any): React.CSSProperties {
  const style: React.CSSProperties = {}

  if (props.opacity !== undefined) style.opacity = props.opacity

  if (props.x !== undefined || props.y !== undefined) {
    style.transform = `translate(${props.x || 0}px, ${props.y || 0}px)`
  }

  if (props.rotate !== undefined) {
    style.transform = `${style.transform || ''} rotate(${props.rotate}deg)`.trim()
  }

  if (props.scale !== undefined) {
    style.transform = `${style.transform || ''} scale(${props.scale})`.trim()
  }

  return style
}

function createTransition(options?: AnimationOptions): string {
  if (!options) return 'all 0.3s ease'

  const { duration = 0.3, delay = 0, ease = 'ease' } = options

  return `all ${duration}s ${ease} ${delay}s`
}

motion.div = motion('div')
motion.span = motion('span')
motion.h1 = motion('h1')
motion.h2 = motion('h2')
motion.h3 = motion('h3')
motion.p = motion('p')
motion.a = motion('a')
motion.section = motion('section')
motion.article = motion('article')
motion.aside = motion('aside')
motion.footer = motion('footer')
motion.header = motion('header')
motion.nav = motion('nav')
motion.ul = motion('ul')
motion.ol = motion('ol')
motion.li = motion('li')
motion.button = motion('button')

export default motion