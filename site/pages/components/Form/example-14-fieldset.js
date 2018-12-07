/**
 * cn - FieldSet
 *    -- Form.FieldSet 可以处理对象类型的字段
 * en - FieldSet
 *    -- Form.FieldSet handles fields of object type
 */
import React, { PureComponent } from 'react'
import { Datum, Form, Input, Checkbox, Select } from 'shineout'
import { fetchSync as fetchCity } from 'doc/data/city'

const citys = fetchCity(20)

const rules = {
  age: [
    { min: 18, max: 60, message: 'Age must between {min} and {max}.' },
  ],
  city: [
    { required: true, message: 'Please select your city.' },
  ],
}

export default class extends PureComponent {
  componentDidMount() {
    this.datum.setValue({
      email: 'test@example.com',
      account: {
        name: {
          firstName: 'James',
          lastName: 'Potter',
        },
        age: 18,
        city: 3,
      },
      favoriteColor: ['cyan', 'yellow'],
    })

    setTimeout(() => {
      this.datum.set('account.name.firstName', 'Harry')
    }, 1000)
  }

  datum = new Datum.Form()

  render() {
    return (
      <Form datum={this.datum} onSubmit={(data) => { console.log(data) }}>
        <Form.Item label="Email">
          <Input name="email" />
        </Form.Item>

        <Form.Item label="Password">
          <Input name="password" type="password" />
        </Form.Item>

        <Form.Item label="Account">
          <Form.FieldSet name="account" labelWidth={60}>
            <Form.Item label="Name">
              <Form.FieldSet name="name">
                <Input.Group style={{ width: 300 }}>
                  <Input name="firstName" placeholder="First Name" />
                  -
                  <Input name="lastName" placeholder="Last Name" />
                </Input.Group>
              </Form.FieldSet>
            </Form.Item>

            <Form.Item label="Age">
              <Input
                rules={rules.age}
                style={{ width: 100 }}
                name="age"
                type="number"
                digits={0}
                defaultValue={0}
              />
            </Form.Item>

            <Form.Item label="City">
              <Select
                name="city"
                data={citys}
                datum={{ format: 'id' }}
                keygen="id"
                renderItem="city"
                rules={rules.city}
                style={{ width: 200 }}
              />
            </Form.Item>

          </Form.FieldSet>
        </Form.Item>

        <Form.Item label="Favorite Color">
          <Checkbox.Group
            name="favoriteColor"
            keygen
            data={['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']}
          />
        </Form.Item>

        <Form.Item label="">
          <Form.Submit>Submit</Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </Form.Item>
      </Form>
    )
  }
}