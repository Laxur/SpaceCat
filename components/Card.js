import React from 'react';
import { Text } from 'react-native';
import { View, Image } from 'react-native';


const Card = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <Text style={styles.noBooksMessage}>
        No se encontraron libros.
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      {books.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <View style={styles.card} key={index}>
              <Image source={{ uri: thumbnail }} style={styles.image} />
              <View style={styles.bottom}>
                <Text style={styles.title}>{item.volumeInfo.title}</Text>
              </View>
            </View>
          );
        } else {
          return null;
        }
      })}
    </View>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 16,
    marginTop: 10,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
  },
  noBooksMessage: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
};

export default Card;
