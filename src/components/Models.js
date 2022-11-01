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
  Row,
  Col,
} from "antd";
import { makeModelsPost } from "../api/api";

const { Title } = Typography;
const { Option } = Select;

const formValuesInitialState = {
  host_listings_count: "",
  host_identity_verified: "",
  host_is_superhost: "",
  accommodates: "",
  beds: "",
  minimum_nights: "",
  maximum_nights: "",
  availability_365: "",
  number_of_reviews: "",
  reviews_per_month: "",
  instant_bookable: "",
  bathroom: "",
  bathroom_type_private: "",
  amenities: "amenities_low",
  neighbourhood: "neighbourhood_cleansed_1Ο ΝΕΚΡΟΤΑΦΕΙΟ",
  room_type: "room_type_Private room",
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

const is_disabled =  !formValues.host_listings_count ||
!formValues.host_identity_verified ||
!formValues.host_is_superhost ||
!formValues.accommodates ||
!formValues.beds ||
!formValues.minimum_nights ||
!formValues.maximum_nights ||
!formValues.availability_365 ||
!formValues.number_of_reviews ||
!formValues.reviews_per_month ||
!formValues.instant_bookable ||
!formValues.bathroom ||
!formValues.neighbourhood ||
!formValues.room_type ||
!formValues.amenities ||
!formValues.bathroom_type_private


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };
  const handleNeighbourhood = (value) => {
    setFormValues({ ...formValues, neighbourhood: value });
  };
  const handleRoomType = (value) => {
    setFormValues({ ...formValues, room_type: value });
  };
  const handleAmenities = (value) => {
    setFormValues({ ...formValues, amenities: value });
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
    <div className="content">
    <div className="stats_page">
      <Card>
        <Title>Models form</Title>
        <form>
          <Form.Item label="How many listings do you own?">
            <Input
              type="number"
              placeholder="Insert the number of listings you own"
              name="host_listings_count"
              value={formValues.host_listings_count}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Is you identity verified?">
            <Radio.Group
              name="host_identity_verified"
              onChange={handleInputChange}
              value={formValues.host_identity_verified}
            >
              <Radio value="1">Yes</Radio>
              <Radio value="0">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Are you a Super Host?">
            <Radio.Group
              name="host_is_superhost"
              onChange={handleInputChange}
              value={formValues.host_is_superhost}
            >
              <Radio value="1">Yes</Radio>
              <Radio value="0">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="How many persons can stay?">
            <Input
              type="number"
              placeholder="Insert the number of persons"
              name="accommodates"
              value={formValues.accommodates}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="How many beds are there?">
            <Input
              type="number"
              placeholder="Insert the number of beds"
              name="beds"
              value={formValues.beds}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Whats the number of minimum nights?">
            <Input
              type="number"
              placeholder="Insert the number of minimum nights"
              name="minimum_nights"
              value={formValues.minimum_nights}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Whats the number of maximum nights?">
            <Input
              type="maximum_nights"
              placeholder="Insert the number of maximum nights"
              name="maximum_nights"
              value={formValues.maximum_nights}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Whats the availability in a year?">
            <Input
              type="number"
              placeholder="Insert the number of days that the property is available in the year"
              name="availability_365"
              value={formValues.availability_365}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Whats the number of reviews for the property?">
            <Input
              type="number"
              placeholder="Insert the number of reviews for the property"
              name="number_of_reviews"
              value={formValues.number_of_reviews}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Whats the number of reviews per month?">
            <Input
              type="number"
              placeholder="Insert the number of reviews per month"
              name="reviews_per_month"
              value={formValues.reviews_per_month}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Is there property Instant Bookable?">
            <Radio.Group
              name="instant_bookable"
              onChange={handleInputChange}
              value={formValues.instant_bookable}
            >
              <Radio value="1">Yes</Radio>
              <Radio value="0">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="How many bathrooms has the property?">
            <Input
              type="number"
              placeholder="Insert the number bathrooms"
              name="bathroom"
              value={formValues.bathroom}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Is/are the bathroom/bathrooms private?">
            <Radio.Group
              name="bathroom_type_private"
              onChange={handleInputChange}
              value={formValues.bathroom_type_private}
            >
              <Radio value="1">Yes</Radio>
              <Radio value="0">No</Radio>
            </Radio.Group>
          </Form.Item>


          <Form.Item label="In which neighbourhood is the property located">
            <Select
              name="neighbourhood"
              defaultValue=""
              value={formValues.neighbourhood}
              onChange={handleNeighbourhood}
            >
              <Option value="neighbourhood_cleansed_1Ο ΝΕΚΡΟΤΑΦΕΙΟ">1st Cemetery</Option>
              <Option value="neighbourhood_cleansed_ΑΓΙΟΣ ΕΛΕΥΘΕΡΙΟΣ">Agios Eleutherios</Option>
              <Option value="neighbourhood_cleansed_ΑΓΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ-ΠΛΑΤΕΙΑ ΒΑΘΗΣ">
                Agios Konstantinos - Vathis square
              </Option>
              <Option value="neighbourhood_cleansed_ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ">Agios Nikolaos</Option>
              <Option value="neighbourhood_cleansed_ΑΚΑΔΗΜΙΑ ΠΛΑΤΩΝΟΣ">Akadimia Platonos</Option>
              <Option value="neighbourhood_cleansed_ΑΚΡΟΠΟΛΗ">Akropolis</Option>
              <Option value="neighbourhood_cleansed_ΑΜΠΕΛΟΚΗΠΟΙ">Ampelokipi</Option>
              <Option value="neighbourhood_cleansed_ΑΝΩ ΚΥΨΕΛΗ">Ano Kipseli</Option>
              <Option value="neighbourhood_cleansed_ΑΝΩ ΠΑΤΗΣΙΑ">Ano Patisia</Option>
              <Option value="neighbourhood_cleansed_ΒΟΤΑΝΙΚΟΣ">Votanikos</Option>
              <Option value="neighbourhood_cleansed_ΓΚΑΖΙ">Gazi</Option>
              <Option value="neighbourhood_cleansed_ΓΚΥΖΗ">Gizi</Option>
              <Option value="neighbourhood_cleansed_ΓΟΥΒΑ">Gouva</Option>
              <Option value="neighbourhood_cleansed_ΓΟΥΔΙ">Goudi</Option>
              <Option value="neighbourhood_cleansed_ΕΛΛΗΝΟΡΩΣΩΝ">Ellinoroson</Option>
              <Option value="neighbourhood_cleansed_ΕΜΠΟΡΙΚΟ ΤΡΙΓΩΝΟ-ΠΛΑΚΑ">
                Emporiko Trigono Plaka
              </Option>
              <Option value="neighbourhood_cleansed_ΖΑΠΠΕΙΟ">Zappeion</Option>
              <Option value="neighbourhood_cleansed_ΘΗΣΕΙΟ">Thisio</Option>
              <Option value="neighbourhood_cleansed_ΙΛΙΣΙΑ">Ilisia 4</Option>
              <Option value="neighbourhood_cleansed_ΚΕΡΑΜΕΙΚΟΣ">Keramikos</Option>
              <Option value="neighbourhood_cleansed_ΚΟΛΟΚΥΝΘΟΥ">Kolokinthou</Option>
              <Option value="neighbourhood_cleansed_ΚΟΛΩΝΑΚΙ">Kolonaki</Option>
              <Option value="neighbourhood_cleansed_ΚΟΛΩΝΟΣ">Kolonos</Option>
              <Option value="neighbourhood_cleansed_ΚΟΥΚΑΚΙ-ΜΑΚΡΥΓΙΑΝΝΗ">Koukaki - Makrigianni</Option>
              <Option value="neighbourhood_cleansed_ΚΥΨΕΛΗ">Kipseli</Option>
              <Option value="neighbourhood_cleansed_ΛΥΚΑΒΗΤΤΟΣ">Likavitos</Option>
              <Option value="neighbourhood_cleansed_ΜΟΥΣΕΙΟ-ΕΞΑΡΧΕΙΑ-ΝΕΑΠΟΛΗ">
                Mouseio - Exarchia - Neapoli
              </Option>
              <Option value="neighbourhood_cleansed_ΝΕΑ ΚΥΨΕΛΗ">Nea Kipseli</Option>
              <Option value="neighbourhood_cleansed_ΝΕΟΣ ΚΟΣΜΟΣ">Neos Kosmos</Option>
              <Option value="neighbourhood_cleansed_ΝΙΡΒΑΝΑ">Nirvana</Option>
              <Option value="neighbourhood_cleansed_ΠΑΓΚΡΑΤΙ">Pagrati</Option>
              <Option value="neighbourhood_cleansed_ΠΑΤΗΣΙΑ">Patisia</Option>
              <Option value="neighbourhood_cleansed_ΠΕΔΙΟ ΑΡΕΩΣ">Pedion Areos</Option>
              <Option value="neighbourhood_cleansed_ΠΕΝΤΑΓΩΝΟ">Pentagono</Option>
              <Option value="neighbourhood_cleansed_ΠΕΤΡΑΛΩΝΑ">Petralona</Option>
              <Option value="neighbourhood_cleansed_ΠΛΑΤΕΙΑ ΑΜΕΡΙΚΗΣ">Amerikis Square</Option>
              <Option value="neighbourhood_cleansed_ΠΛΑΤΕΙΑ ΑΤΤΙΚΗΣ">Attikis Square</Option>
              <Option value="neighbourhood_cleansed_ΠΟΛΥΓΩΝΟ">Poligono</Option>
              <Option value="neighbourhood_cleansed_ΠΡΟΜΠΟΝΑ">Prompona</Option>
              <Option value="neighbourhood_cleansed_ΡΗΓΙΛΛΗΣ">Rigilis</Option>
              <Option value="neighbourhood_cleansed_ΡΙΖΟΥΠΟΛΗ">Rizoupoli</Option>
              <Option value="neighbourhood_cleansed_ΣΕΠΟΛΙΑ">Sepolia</Option>
              <Option value="neighbourhood_cleansed_ΣΤΑΔΙΟ">Stadio</Option>
              <Option value="neighbourhood_cleansed_ΣΤΑΘΜΟΣ ΛΑΡΙΣΗΣ">Larisis Station</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select amenities number">
            <Select
              name="amenities"
              defaultValue=""
              value={formValues.amenities}
              onChange={handleAmenities}
            >
              <Option value="amenities_low">Number of amenities less 27</Option>
              <Option value="amenities_medium">Number of amenities 27-34</Option>
              <Option value="amenities_high">Number of amenities more 34</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select property type">
            <Select
              name="room_type"
              defaultValue=""
              value={formValues.room_type}
              onChange={handleRoomType}
            >
              <Option value="room_type_Private room">Private room</Option>
              <Option value="room_type_Shared room">Shared room</Option>
              <Option value="room_type_Entire home/apt">Entire home/apt</Option>
              <Option value="room_type_Hotel room">Hotel room</Option>
            </Select>
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
            <Button
              disabled={is_disabled}
              type="primary"
              onClick={handleFormSubmit}
            >
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
    </div>
  );
};

export default Models;
