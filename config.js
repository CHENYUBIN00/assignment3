var config = {
    style: 'mapbox://styles/yubin00/cm837k6r7000101sf486a8i04',
    accessToken: 'pk.eyJ1IjoieXViaW4wMCIsImEiOiJjbHg5czU0em4xZTd6MmtvamU1ZHl4b3A2In0.QxIK6cWXdKd6dCEm0dtBWQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'City in Nature,Nature to Play',
    subtitle: "Singapore's park distribution and accessibility ",
    byline: 'By Chen Yubin',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Singapore Green Space Distribution',
            description: 'Singapore has two types of green spaces—nature reserves and parks. Nature reserves are primarily concentrated in the central and northwestern parts of Singapore. In contrast, parks are distributed across various regions, from the city center to surrounding areas. Nature reserves are mainly for holiday exploration, while parks cater to daily recreational needs.<br><br><strong>This study focuses on parks as the research subject</strong> because they are more relevant to building a 5-minute community.<br><br><img src="images/legend4.png" style="height:100%;width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 1
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 1
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 1               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Study Area',
            description: 'This study examines planning areas in Singapore with a population greater than 1,000. Since parks primarily serve residents, selecting areas with a population above this threshold ensures the presence of a meaningful residential community, distinguishing them from industrial or natural zones.<br><br>The study selected a total of 34 planning areas.<br><br><img src="images/legend5.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 1
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 1               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 1
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Per Capita Park Area',
            description: 'The highest per capita park area among these 34 towns is 86.81, while the lowest is 0.88. The median is 4.26. Areas with higher per capita green space are mainly concentrated in the city center. The three towns with the lowest per capita green space are Geylang (0.88), Jurong West (1.05), and Novena (1.28), all far below the government target of 8 square meters per person.<br><br><img src="images/image2.png" style="height:100%; width:300px;"></img>',
            location: {
                center: [103.76108, 1.36580],
                zoom: 11,
                pitch: 60,
                bearing: -30,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 1
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 1                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 1
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 1
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 1
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: "Parks' Acessibility",
            description: 'We studied the area within 400 meters of the park, which is approximately a 5-minute walking distance. From the map, we found that, overall, this covers most residential areas, but some parts remain uncovered.<br><br><img src="images/legend6.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.83304, 1.35969],
                zoom: 12,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 1                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 1
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 1
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 1
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 0
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 1
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: "Uncovered Area",
            description: 'We highlighted the uncovered areas and found that they are mainly concentrated in the central region and Jurong West. These areas, along with the towns identified in the previous study as having smaller per capita park space, will be the key focus for future green space expansion.<br><br><img src="images/legend27.png" style="height:100%; width:100px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 1
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'study-area-1xqwq3',
                    opacity: 0
                },
                {
                    layer: 'study-area-1xqwq3 (1)',
                    opacity: 0               
                },
                {
                    layer: 'residential-7hj7al',
                    opacity: 0                
                },
                {
                    layer: 'buffer400-6lgaiz',
                    opacity: 0
                },
                {
                    layer: 'buffer400-6lgaiz (1)',
                    opacity: 0
                },
                {
                    layer: 'parks-4i8ts5',
                    opacity: 0
                },
                {
                    layer: 'resi-outside400-68rsfe',
                    opacity: 1
                },
                {
                    layer: 'park-per-person-4j6lvt',
                    opacity: 0
                },
                {
                    layer: 'nature-reserve-61j2tv',
                    opacity: 0
                }
            ],
        }
    ]
};