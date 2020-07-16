import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';


const HomeScreen = (props) => {
  const { items } = props;
  return (
    <View style={{flex: 1}}>
      {
        items.length ?
        items.map((item, i) => 
        <TouchableOpacity style={styles.listItemLayout} key={i}>
        <View style={styles.listItem}>
          <Text>Title: {item.title}</Text>
          <Text>Description : {item.desc}</Text>
        </View>
      </TouchableOpacity>
        )
        :
        <View style = {styles.textLayout}>
          <Text style ={styles.textStyles}>CLICK ON ADD</Text>
        </View>
      }

      <TouchableOpacity
        style={styles.buttonLayout}
        onPress={() => props.navigation.navigate('Create Notes')}>
        <Text style={{...styles.buttonText, paddingLeft: 10}}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};


const mapStateToProps = state => {
  return { 
  
      items:state.notes
  }
}

export default connect(mapStateToProps,undefined)(HomeScreen);


const styles = StyleSheet.create({
  textLayout:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,

  },
  textStyles:{

    fontSize:20
  },

  listItemLayout: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  listItem: {
    padding: 20,
    backgroundColor: '#ccc',
    borderColor: 'black',
  },
  buttonLayout: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#43d9be',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
  },
});
