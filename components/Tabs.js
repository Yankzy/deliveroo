import { TouchableOpacity, Text } from 'react-native'

const Tabs = ({ label, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={{ padding: 12, borderBottomWidth: isActive ? 2 : 0 }}
      onPress={onPress}
    >
      <Text style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Tabs
