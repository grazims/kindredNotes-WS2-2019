import React from 'react'
import {TouchableOpacity} from 'react-native'
import styles from './NotesGrid.styles'
import {COLORS} from '../styles'

const NotesGridItem = ({style, color, onPress, children}) => (
  <TouchableOpacity
    style={{
      ...styles.item,
      backgroundColor:
        style === 'BORDERED'
          ? COLORS.TEXT_PRIMARY.INVERT
          : COLORS[`ACCENT_${color}`],
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
)

export default NotesGridItem
