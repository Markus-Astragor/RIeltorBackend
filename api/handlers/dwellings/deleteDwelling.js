

const {DwellingModel} = require('../../../models/dwellings.js');

const {FavoriteListModel} = require('../../../models/favoriteLists.js');


module.exports.deleteDwelling = async (req,res) =>{


    const {id} = req.params;

    const post = await DwellingModel.findById(id);

    if(!post) {
        return res.status(400).send('Post with such id was not found');
    }

    const deleted_post = await DwellingModel.findByIdAndDelete(id);
    console.log(deleted_post);

    const delete_post_from_saved_list = await FavoriteListModel.updateMany({}, {$pull: {dwelling_lists: id}}); // Видалення id поста з Saved list користувачів


    res.status(200).send("Post was deleted");

}