import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, } from 'react-native';
import { StyleSheet } from 'react-native';
import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';

export const HomeScreen = ({ navigation }) => {

	function interactionHandler(item)
	{

navigation.navigate("Details",{item});
	}




	return (
		<View style={styles.coverer}>
			<View style={styles.homebody}>
				<ScrollView>

					<SectionList
						sections={defaultState}
						renderItem={({ item }) => (

							<ConcertListItem item={item} navigation={navigation}  handleInteraction = {interactionHandler} />

						)}
						renderSectionHeader={({ section }) => (

							<Text style={styles.sectionHeader}>
								{section.title}
							</Text>

						)} />

				</ScrollView>
			</View>

			<Text style={styles.homefooter}>

				(C)2020 Globoticket

			</Text>

		</View>
	)

}
const styles = StyleSheet.create({

	coverer: {

		backgroundColor: "orange",
		flex: 1
		//height: 470

	},
	homebody: {

		flex: 15
	},
	homefooter: {

		flex: 1,
		alignSelf: "stretch",
		justifyContent: "flex-end",
		borderTopColor: "gray",
		borderTopWidth: StyleSheet.hairlineWidth,
		bordergroundColor: "steelblue",

	},
	sectionHeader: {
		paddingTop: 2,
		paddingBottom: 2,
		paddingRight: 10,
		paddingLeft: 10,
		fontWeight: "bold",
		backgroundColor: "red",
		borderBottumColor: "blue",
		borderBottomWidth: StyleSheet.hairlineWidth

	}
})