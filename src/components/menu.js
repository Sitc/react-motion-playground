import React from 'react'
import { Link } from 'gatsby'

//Gatsby Image
import { Image } from '../components/gatsby-images/image'

//Framer Motion
import { motion, animatePresence, AnimatePresence } from "framer-motion"

//data
import data from "../data/products.json"

//icons
import { Close } from "../icons/icons"

//Transition
const transition = {duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9]}

//Variants
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 }
}

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    }
  }
}

const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 }
}

const Menu = ({menuState, setMenuState}) => {
  return (
    <>
    <AnimatePresence>
      {menuState &&
      <>
      <motion.div exit={{ opacity: 0 }} className="products">
        <div className="menu-title">Product</div>
            <div onClick={() => setMenuState(false)} className="close">
              <Close />
            </div>
            <div className="menu">
              <div className="container">
                <div className="menu-inner">
                  <motion.ul 
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {data.map((list, index) => (
                      <List 
                        key={index} 
                        title={list.title} 
                        src={list.src} 
                        offset={list.offset} 
                        id={list.id} 
                        leftLineFlex={list.leftLineFlex}
                        rightLineFlex={list.rightLineFlex}
                        thumbnailPosition={list.thumbnailPosition}
                      />
                    ))}
                  </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
        <Panels />
        </>
      }
      </AnimatePresence>
    </>
  )
}

const List = ({
    title, 
    id, 
    src, 
    offset, 
    leftLineFlex, 
    rightLineFlex, 
    thumbnailPosition
  }) => {
  return (
    <li>
      <Link to={`/product/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
          <motion.div 
            variants={maskAnimation} 
            transition={{ ...transition, duration: 1 }} 
            className="mask">
          </motion.div>
          </div>
          <div className="title">
            <h2>
              <motion.div 
                className="text"
                variants={titleSlideUp}
                transition={transition}
              >
                {title}
              </motion.div>
            </h2>
          </div>
          <div className="thumbnail" style={{ left: thumbnailPosition}}>
            <Image src={src} />
            <motion.div 
              variants={maskAnimation} 
              transition={{ ...transition, duration: 1 }}  
              className="mask">
            </motion.div>
          </div>
          <div className="floating-image">
            <Image src={src} />
          </div>
          <div className={`line right flex-${rightLineFlex}`}>
          <motion.div 
            variants={maskAnimation} 
            transition={{ ...transition, duration: 1 }} 
            className="mask right">
          </motion.div>
          </div>
        </div>
      </Link>
    </li>
  )
}

const Panels = () => {
  return (
    <>
      <div className="left-panel-background"></div>
      <div className="right-panel-background"></div>
    </>
  )
}

export default Menu
