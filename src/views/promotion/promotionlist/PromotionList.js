import React, { Component } from 'react';
import { connect } from 'react-redux';
import PromotionAddForm from '../form/PromotionAddForm'
import Item from './Item/Item';
import { Spinner } from 'reactstrap';
import { Empty } from 'antd';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Form
} from "reactstrap";
import {getAllPromotion} from '../../../redux/promotion/action';

class PromotionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey:''
        }
    }

    async componentDidMount() {
        const token = await window.localStorage.getItem('userToken');
        await this.props.fetchPromotions(token);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { loading, error, promotions } = this.props.data;
        const { searchKey } = this.state;
        return (
            <>
                <PromotionAddForm />
                <div className="panel panel-default">
                    <div className="panel-heading" style={{height: '55px'}}>
                        <Form onSubmit={this.onSearch}>
                            <InputGroup style={{width: '40%', float: 'right'}} >
                            <Input type="text" name="searchKey" onChange={this.onChange} defaultValue={searchKey} placeholder="Search ..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                            </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        <h3 className="panel-title" style={{paddingTop: '5px'}}>Promotion List</h3>
                    </div>
                    <div className="panel-body">
                    {error === null && error === undefined ?
                        <div>An error occur: {error}</div> : (!loading ?
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Name</th>
                                        <th>Promotion Code</th>
                                        <th>Sale Promotion</th>
                                        <th>Image</th>
                                        <th>Start Date</th>
                                        <th>Expired Date</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {(promotions !== null && promotions !== undefined ? promotions.map((promotion, index) => (
                                    promotion.name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1 ? <Item key={index} index={index + 1} promotion={promotion} /> : null
                                )) :
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            <Empty/>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table> : <div className="text-center"><Spinner color="primary" /></div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      data: state.promotion,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPromotions: (token) => {
            dispatch(getAllPromotion(token));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionList);