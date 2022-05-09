const getPlayers = router.get('/', async (req, res)=> {
    try {
        const allPlayers = await player.find();
        res.status(200).json(allPlayers);
    }
    catch (error) {
        res.status(404).json({ message: error.message });

    }
    res.send('Router is working')
});

export const createPlayers = async (req, res)=> {
    const player = req.body; 

    const newPlayer = new players(player)

    try {
        await newPlayer.save()
        res.status(201).json(newPlayer);
    } catch (error) {
        res.staus(409).json({ message: error.message })
    }
}