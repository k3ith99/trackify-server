const Habits = require("../models/habits")

//create a habit




//list habits

async function showHabits(req,res){
    try{
        const userHabits2 = await Habits.allHabits;
        res.status(200).send(userHabits2)
    }
    catch (err){
        res.status(404).send(err)
    }
    }





//update habits







//delete habits
async function destroy (req, res) {
  
     try {
        const habit = await Habits.findById(req.params.id);
        await habit.delete();
        res.status(204).json('Habit was deleted')
    } catch (err) {
        res.status(500).json({err})
    }
    
}

// async function destroy (req, res) {
  
//     try {
//        const habits = await Habits.getAll();
//        await habits.destroy();
//        res.status(204).json('Habits were deleted')
//    } catch (err) {
//        res.status(500).json({err})
//    }
   
// }

module.exports = { destroy }
