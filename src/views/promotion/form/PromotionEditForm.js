import React, { Component } from 'react';
import {
    Button,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import './css/PromotionEditForm.css';
import { uploadImage } from "../../../api/media";
import { convertDate } from "../../../utils/formater";
import {updatePromotion, getAllPromotion} from '../../../redux/promotion/action';

class PromotionEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            image: '',
            promotion_code: '',
            sale_promotion: '',
            start_date: '',
            expired_date: '',
            description: '',
            file: null,
            folder: 'promotions',
            modal: false,
        };
    }

    componentWillReceiveProps (nextProps) {
        let { id, name, image, promotion_code, sale_promotion, start_date, expired_date, description } = nextProps.promotion;
        this.setState({
            id,
            name,
            image,
            promotion_code,
            sale_promotion,
            start_date,
            expired_date,
            description
        })
    }

    componentDidMount() {
        let { id, name, image, promotion_code, sale_promotion, start_date, expired_date, description } = this.props.promotion; 
        this.setState({
            id,
            name,
            image,
            promotion_code,
            sale_promotion,
            start_date: new Date(start_date),
            expired_date: new Date(expired_date),
            description
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onChangeFile = e => {
        this.setState({file: e.target.files[0]});
    }

    onImageUploadSubmit = async () => {
        const token = await window.localStorage.getItem('userToken');
        const formData = new FormData();
        formData.append('image',this.state.file);
        formData.append('folder', this.state.folder);
        return await uploadImage(formData, token);
    }

    onChangeStartDate= date => {
        this.setState({
            start_date: date,
        });
    }

    onChangeExpiredDate= date => {
        this.setState({
            expired_date: date,
        });
    }

    onSave = async (e) => { 
        let imageUrl = this.props.promotion.image;
        if (this.state.file) {
            var url = await this.onImageUploadSubmit();
            imageUrl = url.data.data;
        }
        e.preventDefault();
        const token = await window.localStorage.getItem('userToken');
        const { id, name, promotion_code, sale_promotion, start_date, expired_date, description } = this.state;        
        await this.props.onUpdatePromotion({
            id,
            name,
            image: imageUrl,
            promotion_code,
            sale_promotion,
            start_date: convertDate(start_date),
            expired_date: convertDate(expired_date),
            description,
            }, token);
        await this.props.fetchPromotions(token);
    }

    render() {
        const { name, image, promotion_code, sale_promotion, start_date, expired_date, description } = this.state;
        return (
            <ModalBody>
                <Form encType="multipart/form-data" onSubmit={this.onSave}>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" defaultValue={name} onChange={this.onChange} required ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs="6">
                                <Label>Promotion Code</Label>
                                <Input type="text" name="promotion_code" defaultValue={promotion_code} onChange={this.onChange} required />
                            </Col>
                            <Col xs="6">
                                <Label>Sale Promotion</Label>
                                <Input type="number" name="sale_promotion" defaultValue={sale_promotion} onChange={this.onChange} required />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="text" name="description" defaultValue={description} onChange={this.onChange} required ></Input>
                    </FormGroup>
                    <Row>
                        <Col xs="6">
                            <Label for="start_date">Start Date</Label>
                            <br></br>
                            <DatePicker
                                className="form-control"
                                name="start_date"
                                dateFormat="yyyy-MM-dd"
                                selected={ start_date }
                                onChange={ this.onChangeStartDate }
                            />
                        </Col>
                        <Col xs="6">
                            <Label>Upload New Image</Label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Image</span>
                                </div>
                                <div className="custom-file">
                                    <Input
                                        type="file"
                                        className="custom-file-input"
                                        id="image"
                                        onChange={this.onChangeFiles}
                                        multiple="multiple"
                                        accept="image/*"
                                    />
                                    <Label className="custom-file-label">Choose</Label>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6">
                            <Label for="expired_date">Expired Date</Label>
                            <br></br>
                            <DatePicker
                                className="form-control"
                                name="expired_date"
                                dateFormat="yyyy-MM-dd"
                                selected={ expired_date }
                                onChange={ this.onChangeExpiredDate }
                            />
                        </Col>
                        <Col xs="6">
                            <img src={image} alt="demo" className="img" />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Button color="success" style={{float: 'right'}}>Save</Button>
                </Form>
            </ModalBody>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdatePromotion: (promotion, token) => {
            dispatch(updatePromotion(promotion, token))
        },
        fetchPromotions: (token) => {
            dispatch(getAllPromotion(token));
        },
    }
}

export default connect(null, mapDispatchToProps)(PromotionEditForm);