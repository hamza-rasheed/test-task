import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from "react-simple-maps";
import { stateLabels } from "../../../core/utils/utils";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USAMap: React.FC = () => {
	return (
		<ComposableMap projection='geoAlbersUsa'>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							style={{
								default: {
									fill: "#5FAE9E",
									stroke: "#FFFFFF",
									outline: "none",
								},
								hover: { fill: "#F53", outline: "none" },
								pressed: { fill: "#E42", outline: "none" },
							}}
						/>
					))
				}
			</Geographies>
			{stateLabels.map(({ name, coordinates }) => (
				<Annotation
					key={name}
					subject={coordinates}
					dx={0}
					dy={0}
					connectorProps={{ stroke: "none" }}
				>
					<text
						x='-2'
						y='5'
						textAnchor='middle'
						fontSize={12}
						fontWeight='bold'
						fill='#666666'
					>
						{name}
					</text>
				</Annotation>
			))}
		</ComposableMap>
	);
};

export default USAMap;
