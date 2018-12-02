const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const request = require('supertest');
const app = require('../index');

const mongoose = require('mongoose');
const Images = mongoose.model('images');
const image_controller = require('../controllers/imageController');

const mockData = [
    {
        "_id": "asd123",
        "title": "animal",
        "imageUrl": "asdas"
    },
    {
        "_id": "asd12",
        "title": "dogs",
        "imageUrl": "asssdas"
    }
]

describe('API /api/images', () => {
    beforeEach(() => {
        sinon.stub(Images, 'find');
    })

    afterEach(() => {
        Images.find.restore();
    })

    it('returns images object array on GET /api/images', async () => {

    })
})