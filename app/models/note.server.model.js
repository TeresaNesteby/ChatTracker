'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Note Schema
 */
var NoteSchema = new Schema({
	form_of_communication: {
		type: String,
		default: '',
		required: 'Please fill Note form of communication',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Note description',
		trim: true
	},
	guardian: {
		type: String,
		default: '',
		required: 'Please fill Note guardian',
		trim: true
	},
	student: {
		type: String,
		default: '',
		required: 'Please fill Note student',
		trim: true
	},
	date_of_meeting: {
		type: String,
		default: '',
		required: 'Please fill Note date of meeting',
		trim: true
	},
	reinforcement: {
		type: Boolean,
		default: '',
		required: 'Please fill Note reinforcement',
		trim: true
	},
	name: {
		type: String,
		default: '',
		required: 'Please fill Note name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Note', NoteSchema);
