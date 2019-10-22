//temporary data file to feed state. This will be an api call.
//pointsByWeek represents the team's current week aggregate point total, with
//the first element representing the beginning of the season when all teams 
//have 0 points.

const teamData = [
    {
        id: 1,
        name: "Arsenal",
        teamImg: "/images/arsenal.png",
        pointsByWeek: [0,3,6,6,7,8,11,12,15,15],
    },
    {
        id: 2,
        name: "AstonVilla",
        teamImg: "/images/astonvilla.png",
        pointsByWeek: [0,0,0,3,3,4,4,5,8,11], 
    },
    {
        id: 3,
        name: "Bournemouth",
        teamImg: "/images/bournemouth.png",
        pointsByWeek: [0,1,4,4,4,7,10,11,11,12],
    },
    {
        id: 4,
        name: "Brighton & Hove Albion",
        teamImg: "/images/brightonha.png",
        pointsByWeek: [0,3,4,4,4,5,6,6,9,9],
    },
    {
        id: 5,
        name: "Burnley",
        teamImg: "/images/burnley.png",
        pointsByWeek: [0,3,3,4,4,5,8,9,12,12],
    },
    {
        id: 6,
        name: "Chelsea",
        teamImg: "/images/chelsea.png",
        pointsByWeek: [0,0,1,4,5,8,8,11,14,17],
    },
    {
        id: 7,
        name: "Crystal Palace",
        teamImg: "/images/crystalpalace.png",
        pointsByWeek: [0,1,1,4,7,7,8,11,14,14],
    },
    {
        id: 8,
        name: "Everton",
        teamImg: "/images/everton.png",
        pointsByWeek: [0,1,4,4,7,7,7,7,7,10],
    },
    {
        id: 9,
        name: "Leicester City",
        teamImg: "/images/leicester.png",
        pointsByWeek: [0,1,2,5,8,8,11,14,14,17],
    },
    {
        id: 10,
        name: "Liverpool",
        teamImg: "/images/liverpool.png",
        pointsByWeek: [0,3,6,9,12,15,18,21,24,25],
    },
    {
        id: 11,
        name: "Manchester City",
        teamImg: "/images/mancity.png",
        pointsByWeek: [0,3,4,7,10,10,13,16,16,19],
    },
    {
        id: 12,
        name: "Manchester United",
        teamImg: "/images/manunited.png",
        pointsByWeek: [0,3,4,4,5,8,8,9,9,10], 
    },
    {
        id: 13,
        name: "Newcastle United",
        teamImg: "/images/newcastle.png",
        pointsByWeek: [0,0,0,3,4,4,5,5,8,8],
    },
    {
        id: 14,
        name: "Norwich City",
        teamImg: "/images/norwich.png",
        pointsByWeek: [0,0,3,3,3,6,6,6,6,7],
    },
    {
        id: 15,
        name: "Sheffield United",
        teamImg: "/images/sheffield.png",
        pointsByWeek: [0,1,4,4,5,5,8,8,9,12],
    },
    {
        id: 16,
        name: "Southampton",
        teamImg: "/images/southampton.png",
        pointsByWeek: [0,0,0,3,4,7,7,7,7,8],
    },
    {
        id: 17,
        name: "Tottenham Hotspur",
        teamImg: "/images/tottenham.png",
        pointsByWeek: [0,3,4,4,5,8,8,11,11,12],
    },
    {
        id: 18,
        name: "Watford",
        teamImg: "/images/watford.png",
        pointsByWeek: [0,0,0,0,1,2,2,2,3,4],
    },
    {
        id: 19,
        name: "West Ham United",
        teamImg: "/images/westham.png",
        pointsByWeek: [0,0,1,4,7,8,11,12,12,12], 
    },
    {
        id: 20,
        name: "Wolverhampton Wanderers",
        teamImg: "/images/wolverhampton.png",
        pointsByWeek: [0,1,2,3,3,3,4,7,10,11],
    }    
]

export default teamData