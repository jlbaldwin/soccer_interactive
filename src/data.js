//temporary data file to feed state. This will be an api call.
//pointsByWeek represents the team's current week aggregate point total, with
//the first element representing the beginning of the season when all teams 
//have 0 points.

const teamData = [
    {
        id: 1,
        name: "Arsenal",
        teamImg: "/images/arsenal.png",
        pointsByWeek: [0,3,6,6,7,8,11,12,15,15,16,17,17,18,19,19,22,22,23,24,24,27,28],
    },
    {
        id: 2,
        name: "Aston Villa",
        teamImg: "/images/astonvilla.png",
        pointsByWeek: [0,0,0,3,3,4,4,5,8,11,11,11,11,14,15,15,15,15,15,18,18,21,21], 
    },
    {
        id: 3,
        name: "Bournemouth",
        teamImg: "/images/bournemouth.png",
        pointsByWeek: [0,1,4,4,4,7,10,11,11,12,13,16,16,16,16,16,16,19,19,20,20,20,20],
    },
    {
        id: 4,
        name: "Brighton & Hove Albion",
        teamImg: "/images/brightonha.png",
        pointsByWeek: [0,3,4,4,4,5,6,6,9,9,12,15,15,15,15,18,19,20,20,20,23,24,24],
    },
    {
        id: 5,
        name: "Burnley",
        teamImg: "/images/burnley.png",
        pointsByWeek: [0,3,3,4,4,5,8,9,12,12,12,12,15,18,18,18,18,21,24,24,24,24,24],
    },
    {
        id: 6,
        name: "Chelsea",
        teamImg: "/images/chelsea.png",
        pointsByWeek: [0,0,1,4,5,8,8,11,14,17,20,23,26,26,26,29,29,29,32,32,35,36,39],
    },
    {
        id: 7,
        name: "Crystal Palace",
        teamImg: "/images/crystalpalace.png",
        pointsByWeek: [0,1,1,4,7,7,8,11,14,14,15,15,15,15,18,21,22,23,23,26,27,28,29],
    },
    {
        id: 8,
        name: "Everton",
        teamImg: "/images/everton.png",
        pointsByWeek: [0,1,4,4,7,7,7,7,7,10,10,11,14,14,14,14,17,18,19,22,25,25,28],
    },
    {
        id: 9,
        name: "Leicester City",
        teamImg: "/images/leicester.png",
        pointsByWeek: [0,1,2,5,8,8,11,14,14,17,20,23,26,29,32,35,38,39,39,39,42,45,45],
    },
    {
        id: 10,
        name: "Liverpool",
        teamImg: "/images/liverpool.png",
        pointsByWeek: [0,3,6,9,12,15,18,21,24,25,28,31,34,37,40,43,46,49,52,55,58,61,61],
    },
    {
        id: 11,
        name: "Manchester City",
        teamImg: "/images/mancity.png",
        pointsByWeek: [0,3,4,7,10,10,13,16,16,19,22,25,25,28,29,32,32,35,38,38,41,44,47],
    },
    {
        id: 12,
        name: "Manchester United",
        teamImg: "/images/manunited.png",
        pointsByWeek: [0,3,4,4,5,8,8,9,9,10,13,13,16,17,18,21,24,25,25,28,31,31,34], 
    },
    {
        id: 13,
        name: "Newcastle United",
        teamImg: "/images/newcastle.png",
        pointsByWeek: [0,0,0,3,4,4,5,5,8,8,9,12,15,15,16,19,22,22,25,25,25,25,26],
    },
    {
        id: 14,
        name: "Norwich City",
        teamImg: "/images/norwich.png",
        pointsByWeek: [0,0,3,3,3,6,6,6,6,7,7,7,7,10,11,11,11,12,12,12,13,14,14],
    },
    {
        id: 15,
        name: "Sheffield United",
        teamImg: "/images/sheffield.png",
        pointsByWeek: [0,1,4,4,5,5,8,8,9,12,13,16,17,18,19,19,22,25,28,29,29,29,32],
    },
    {
        id: 16,
        name: "Southampton",
        teamImg: "/images/southampton.png",
        pointsByWeek: [0,0,0,3,4,7,7,7,7,8,8,8,8,9,12,15,15,15,18,21,22,25,28],
    },
    {
        id: 17,
        name: "Tottenham Hotspur",
        teamImg: "/images/tottenham.png",
        pointsByWeek: [0,3,4,4,5,8,8,11,11,12,12,13,14,17,20,20,23,26,26,29,30,30,30],
    },
    {
        id: 18,
        name: "Watford",
        teamImg: "/images/watford.png",
        pointsByWeek: [0,0,0,0,1,2,2,2,3,4,5,5,8,8,8,8,9,9,12,13,16,19,22],
    },
    {
        id: 19,
        name: "West Ham United",
        teamImg: "/images/westham.png",
        pointsByWeek: [0,0,1,4,7,8,11,12,12,12,13,13,13,13,16,16,16,19,19,19,22,22,22], 
    },
    {
        id: 20,
        name: "Wolverhampton Wanderers",
        teamImg: "/images/wolverhampton.png",
        pointsByWeek: [0,1,2,3,3,3,4,7,10,11,12,13,16,19,20,23,24,24,27,30,30,30,31],
    }    
]

export default teamData