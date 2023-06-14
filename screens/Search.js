import React, { useState } from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';

const data = [
  { id: 1, category: "Fiction", books: [{ id: 1, bookName: "Book 1" }, { id: 2, bookName: "Book 2" }] },
  { id: 2, category: "Non-Fiction", books: [{ id: 3, bookName: "Book 3" }, { id: 4, bookName: "Book 4" }] }
];

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = data;

  function renderHeader() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 16, alignItems: 'center' }}>
        <Text style={{ flex: 1, fontSize: 18 }}>Greetings!</Text>
        
        {/* Search Filter */}
        <View style={{ flex: 1, marginLeft: 16 }}>
          <TextInput
            style={{ backgroundColor: '#f2f2f2', padding: 8, borderRadius: 8, color: 'black' }}
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>
    )
  }

  function renderCategoryData() {
    var books = []

    let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books
    }

    // Filter books based on search query
    if (searchQuery !== "") {
      books = books.filter(book => book.bookName.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return (
      <FlatList
        data={books}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBookPress(item)}>
            <Text>{item.bookName}</Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  function handleBookPress(book) {
    // Handle book press
    console.log("Selected book:", book);
  }

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {renderHeader()}
      {renderCategoryData()}
    </View>
  );
}

export default Search;
