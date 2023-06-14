import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image,ImageBackground } from 'react-native';
import { FONTS, COLORS, SIZES, icons } from "../constants";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Buttons({ route, navigation }) {
  const itemsPerPage = 30;
  const [totalItems, settotalItems] = React.useState(150);
  //const totalItems = 100
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [bookaa, setBooka] = React.useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookaimg, setBookimg] = React.useState();
  const [web,setWeb] = React.useState();
  const [book,setBook] = React.useState();
  
  React.useEffect(() => {
    let { bookaa } = route.params;
    setBooka(bookaa)
    settotalItems(bookaa.episodeNo)
    setBookimg(bookaa.bookCover)
    setWeb(bookaa.web)
    console.log(bookaa.web)
}, [bookaa])

  const buttons = Array.from({ length: totalItems }, (_, index) => ({
    
    title: `Capítulo ${index + 1}`,
    
   // onPress: () => console.log(`Chapter ${index + 1} pressed`),
   onPress: () => navigation.navigate("Pdfs",{
        book:bookaa,
        chapterIndex: index + 1,
       

   }
   ),
   
  }));

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleButtons = buttons.slice(startIndex, endIndex);

  

 
  

  return (
    <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80,width: 20, alignItems: 'flex-end' }}></View>
        <ImageBackground
                    source={bookaimg}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                />
                 <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: {bookaimg}
                    }}
                >
                </View>
       <TouchableOpacity
                        style={{bottom: 50, }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon2}
                            resizeMode="contain"
                            style={{
                                width: 85,
                                height: 85,
                               
                            }}
                        />
                    </TouchableOpacity>
      <View style={styles.pagination}>
        <Button title="Prev" onPress={handlePrevPage} disabled={currentPage === 1} />
        <Text style={styles.pageCount}>{`Page ${currentPage} of ${totalPages}`}</Text>
        
          
        <Button
          title="Next"
          onPress={handleNextPage}
          disabled={currentPage === totalPages}
        />
       

      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.grid}>
          {visibleButtons.map((button, index) => (
            <Button key={index} title={button.title} onPress={button.onPress} />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: 'white',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    margin: 4,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  pageCount: {
    marginHorizontal: 10,
    fontSize: 22,
    color: 'white',
  },
});
