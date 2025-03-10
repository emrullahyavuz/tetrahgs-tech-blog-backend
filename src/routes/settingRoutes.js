const express = require('express');
const router = express.Router();
const settingController = require('../controllers/settingController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// @route   GET /api/settings
// @desc    Get all settings
// @access  Public
router.get('/', settingController.getAllSettings);

// @route   GET /api/settings/:key
// @desc    Get setting by key
// @access  Public
router.get('/:key', settingController.getSettingByKey);

// @route   PUT /api/settings
// @desc    Update settings
// @access  Private (Admin)
router.put('/', auth, settingController.updateSettings);

// @route   POST /api/settings/logo
// @desc    Upload site logo
// @access  Private (Admin)
router.post('/logo', auth, upload.single('logo'), settingController.uploadSiteLogo);

// @route   DELETE /api/settings/:key
// @desc    Delete setting
// @access  Private (Admin)
router.delete('/:key', auth, settingController.deleteSetting);

module.exports = router;