import { useState } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  Radio,
  Switch,
  Button,
  Divider,
} from "antd";
import { makeModelsPost } from "../api/api";

const { Title } = Typography;
const { Option } = Select;

const formValuesInitialState = {
  accommodates: "",
  beds: "",
  smoke_alarm: "",
  oven: "",
  patio_balcony: "",
  fire_extinguisher: "",
  shower_gel: "",
  // textField: "",
  // textField2: "",
  // textField3: "",
  // textField4: "",
  // textField5: "",
  // textField6: "",
  // textField7: "",
  // selectField: "",
  // multiplSelectField: [],
  // radioField: "",
  // switchField: false,
};

const Models = () => {
  const [formValues, setFormValues] = useState(formValuesInitialState);
  const [models, setModels] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSelectChange = (value) => {
    setFormValues({ ...formValues, selectField: value });
  };
  const handleMultipleSelectChange = (value) => {
    setFormValues({ ...formValues, multiplSelectField: value });
  };
  const handleSwitchChange = (value) => {
    setFormValues({ ...formValues, switchField: value });
  };
  const resetForm = () => {
    setFormValues(formValuesInitialState);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    // Make the POST HTTP request here
    // Sample POST file api/api.js
    makeModelsPost(formValues).then((responseData) => {
      setModels(responseData);
    });
  };

  return (
    <div className="stats_page">
    <Card>
      <Title>Models form</Title>
      <form>
      <Form.Item label="How many persons can stay?">
          <Input
            placeholder="Insert the number of persons"
            name="accommodates"
            value={formValues.accommodates}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="How many beds are there?">
          <Input
            placeholder="Insert the number of beds"
            name="beds"
            value={formValues.beds}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="Is there smoke alarm?">
          <Radio.Group
            name="smoke_alarm"
            onChange={handleInputChange}
            value={formValues.smoke_alarm}
          >
            <Radio value="1">Yes</Radio>
            <Radio value="0">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is there oven?">
          <Radio.Group
            name="oven"
            onChange={handleInputChange}
            value={formValues.oven}
          >
            <Radio value="1">Yes</Radio>
            <Radio value="0">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is there patio balcony?">
          <Radio.Group
            name="patio_balcony"
            onChange={handleInputChange}
            value={formValues.patio_balcony}
          >
            <Radio value="1">Yes</Radio>
            <Radio value="0">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is there fire extinguisher?">
          <Radio.Group
            name="fire_extinguisher"
            onChange={handleInputChange}
            value={formValues.fire_extinguisher}
          >
            <Radio value="1">Yes</Radio>
            <Radio value="0">No</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is there shower gel?">
          <Radio.Group
            name="shower_gel"
            onChange={handleInputChange}
            value={formValues.shower_gel}
          >
            <Radio value="1">Yes</Radio>
            <Radio value="0">No</Radio>
          </Radio.Group>
        </Form.Item>



{/* 
        <Form.Item label="Text Field">
          <Input
            placeholder="Only number for testing purposes"
            name="textField"
            value={formValues.textField}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 2">
          <Input
            placeholder="placeholder"
            name="textField2"
            value={formValues.textField2}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 3">
          <Input
            placeholder="placeholder"
            name="textField3"
            value={formValues.textField3}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 4">
          <Input
            placeholder="placeholder"
            name="textField4"
            value={formValues.textField4}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 5">
          <Input
            placeholder="placeholder"
            name="textField5"
            value={formValues.textField5}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 6">
          <Input
            placeholder="placeholder"
            name="textField6"
            value={formValues.textField6}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Text Field 7">
          <Input
            placeholder="placeholder"
            name="textField7"
            value={formValues.textField7}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Single Select">
          <Select
            name="selectField"
            defaultValue=""
            value={formValues.selectField}
            onChange={handleSelectChange}
          >
            <Option value="">Please choose something</Option>
            <Option value="select-1">Select 1</Option>
            <Option value="select-2">Select 2</Option>
            <Option value="select-3">Select 3</Option>
            <Option value="select-4">Select 4</Option>
          </Select>
        </Form.Item>
        <Form.Item label="More options">
          <Select
            name="multiplSelectField"
            mode="multiple"
            allowClear
            value={formValues.multiplSelectField}
            onChange={handleMultipleSelectChange}
          >
            <Option value="select-1">Select 1</Option>
            <Option value="select-2">Select 2</Option>
            <Option value="select-3">Select 3</Option>
            <Option value="select-4">Select 4</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Radio groups">
          <Radio.Group
            name="radioField"
            onChange={handleInputChange}
            value={formValues.radioField}
          >
            <Radio value="radio-1">Radio 1</Radio>
            <Radio value="radio-2">Radio 2</Radio>
            <Radio value="radio-3">Radio 3</Radio>
            <Radio value="radio-4">Radio 4</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Switch">
          <Switch
            checked={formValues.switchField}
            onChange={handleSwitchChange}
          />
        </Form.Item> */}
        <Form.Item>
          <Button type="secondary" onClick={resetForm}>
            Reset
          </Button>
          &nbsp;
          <Button type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form.Item>
      </form>

      <Divider />

      {models && (
        <div>
          <Title level={3}>Response data</Title>
          {JSON.stringify(models)}
        </div>
      )}
    </Card>
    </div>
  );
};

export default Models;
