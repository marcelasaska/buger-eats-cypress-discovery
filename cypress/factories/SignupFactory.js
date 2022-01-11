var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firsttName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firsttName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firsttName),
            whatsapp: '16999999999',
            address: {
                postalcode: '14804110',
                street: 'Rua Angelina Credidio Ópice',
                number: '51',
                details: 'Casa',
                district: 'Parque Residencial Vale do Sol',
                city_state: 'Araraquara/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}