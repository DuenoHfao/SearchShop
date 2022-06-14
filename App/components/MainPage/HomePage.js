import { StyleSheet } from "react-native"
import searchBar from "./SearchBar/SearchBar"

export default function home () {
    const [value,setValue] = useState()
    function updateSearch(value) {
        //input search logic
    }

    return (
        <View style={homeStyle.container}>
            <View style={{height:'30%',backgroundColor:'#3F569C', borderRadius: 20}}>
                <Image 
                    style={{height:'30%', backgroundColor: '#3F569C', borderRadius: 20,}}
                    source={require('../../assets/images/ic_back.png')}></Image>
                <searchBar 
                value = {value} 
                updateSearch = {updateSearch}
                style = {{}} />
            </View>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFa0',
        height: '100%',
        width: '100%',
    }
})