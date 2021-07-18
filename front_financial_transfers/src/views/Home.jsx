import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshUserSession } from 'actions/userLogedIn.js';
import { Loader } from 'react-overlay-loader';
import {Grid, Row, Col} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import SimpleModal from "components/Modal/SimpleModal.jsx";
import UserDataService from 'service/UserDataService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from "components/CustomButton/CustomButton.jsx";
import DataTable from 'react-data-table-component';
import InputMask from 'react-input-mask';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loadingActive:false,
            schedulingList:[]
        }

        this.getSchedulings = this.getSchedulings.bind(this)
        this.createScheduling = this.createScheduling.bind(this)
        this.cleanSchedulings = this.cleanSchedulings.bind(this)
    }

    componentDidMount(){
        this.getSchedulings();
    }

    getSchedulings(){
        this.setState({loadingActive: true})
        UserDataService.getSchedulings()
        .then(response => {
            this.setState({loadingActive: false})
            if(response.status === 200){
                if(response.data != null && response.data.data != null ){
                    if(response.data.data.schedulingList != null){
                        this.setState({
                            schedulingList: response.data.data.schedulingList
                        })
                        console.log(response.data)
                    }
                } 
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Por favor, tente novamente mais tarde.');
                console.log("retornou código: " + response.status);
            }
        })
        .catch(error => {
            this.setState({loadingActive: false})
            console.log(error.message);

            if(error.message.includes("401")){
                this.props.refreshUserSession(undefined, undefined);
                this.props.history.push('/');
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Descrição do erro: '+error.message);
            }
        })
    }

    createScheduling(values){
        let scheduling = {
            originAccount: values.originAccount,
            destinationAccount: values.destinationAccount,
            value: values.value,
            transferDate: values.transferDate,
            schedulingDate: values.schedulingDate
        }

        this.setState({loadingActive: true})
        UserDataService.createScheduling(scheduling)
        .then(response => {
            this.setState({loadingActive: false})
            if(response.status === 200){
                if(response.data != null){
                    if(response.data.code == 600){
                        this.refs.simpleModal.modalOpen('Ops!', 'Não há taxa', 'A ser aplicada para essa transferência.');
                    }
                    else{
                        this.refs.simpleModal.modalOpen('Sucesso!', 'Agendamento', 'Criado com sucesso.');
                        this.getSchedulings();
                    }
                } 
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Por favor, tente novamente mais tarde.');
                console.log("retornou código: " + response.status);
            }
        })
        .catch(error => {
            this.setState({loadingActive: false})
            console.log(error.message);

            if(error.message.includes("401")){
                this.props.refreshUserSession(undefined, undefined);
                this.props.history.push('/');
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Descrição do erro: '+error.message);
            }
        })
    }

    cleanSchedulings(){
        this.setState({loadingActive: true})
        UserDataService.cleanSchedulings()
        .then(response => {
            this.setState({loadingActive: false})
            if(response.status === 200){
                if(response.data != null){
                    this.getSchedulings();
                    this.refs.simpleModal.modalOpen('Sucesso!', 'Todos os Agendamentos', 'Removidos com sucesso.');
                } 
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Por favor, tente novamente mais tarde.');
                console.log("retornou código: " + response.status);
            }
        })
        .catch(error => {
            this.setState({loadingActive: false})
            console.log(error.message);

            if(error.message.includes("401")){
                this.props.refreshUserSession(undefined, undefined);
                this.props.history.push('/');
            }
            else{
                this.refs.simpleModal.modalOpen('Ops!', 'Um erro ocorreu', 'Descrição do erro: '+error.message);
            }
        })
    }

    validate(values) {
        let errors = {}
        if (!values.originAccount) {
            errors.originAccount = 'Entre com a conta de origem'
        }

        if (!values.destinationAccount) {
            errors.destinationAccount = 'Entre com a conta de destino'
        }

        if (!values.value) {
            errors.value = 'Entre com o valor'
        }

        if (!values.transferDate) {
            errors.transferDate = 'Entre com a data da transferência'
        }
        else{
            if(new Date(new Date(values.transferDate).getTime() + new Date(values.transferDate).getTimezoneOffset() * 60000) < new Date().setHours(0, 0, 0, 0)){
                console.log("transf: "+new Date(new Date(values.transferDate).getTime() + new Date(values.transferDate).getTimezoneOffset() * 60000))
                console.log("atual: "+new Date().setHours(0, 0, 0, 0))
                errors.transferDate = 'A data da transferência não pode ser anterior a data atual'
            }
        }
        



        return errors
    }

    render() {
        let originAccount = '';
        let destinationAccount = '';
        let value = '';
        let transferDate = '';
        let schedulingDate = new Date();

        const columns = [
            {
                name: 'Conta de Origem',
                selector: 'originAccount',
                sortable: true
            },
            {
                name: 'Conta de Destino',
                selector: 'destinationAccount',
                sortable: true
            },
            {
                name: 'Valor',
                selector: 'value',
                sortable: true
            },
            {
                name: 'Tipo',
                selector: 'type',
                sortable: true
            },
            {
                name: 'Taxa',
                selector: 'tax',
                sortable: true
            },
            {
                name: 'Data da Transferência',
                selector: 'transferDate',
                sortable: true
            },
            {
                name: 'Data do Agendamento',
                selector: 'schedulingDate',
                sortable: true
            }
        ];
        
        return (
            <div className="content">
                <SimpleModal ref="simpleModal" />
                <Loader fullPage loading={this.state.loadingActive} text=""/>

                <Grid fluid>
                    <Row>
                        <Col sm={12}>
                            <Card content={
                                    <Formik 
                                    initialValues={{originAccount, destinationAccount, value, transferDate, schedulingDate}}
                                    onSubmit={this.createScheduling}
                                    validate={this.validate}
                                    validateOnChange={false}
                                    validateOnBlur={false}
                                    enableReinitialize={true}
                                    >
                                    {
                                    (props) => (
                                        <Form>
                                            <Row>
                                                <div>
                                                    <i style={{fontSize:'large', paddingRight:'30px', paddingBottom:'20px'}} className='fa fa-search text-warning'/>
                                                    <span style={{fontSize:'20px'}} className='title'>Transferências Financeiras</span>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-12">
                                                    <ErrorMessage name="originAccount" component="div" className="alert alert-warning" />
                                                    <ErrorMessage name="destinationAccount" component="div" className="alert alert-warning" />
                                                    <ErrorMessage name="value" component="div" className="alert alert-warning" />
                                                    <ErrorMessage name="transferDate" component="div" className="alert alert-warning" />
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-3">
                                                    <span className="text-danger">*</span><label>Conta de Origem</label>
                                                    <Field className="form-control" type="text" name="originAccount" maxLength="50" />
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-3">
                                                    <span className="text-danger">*</span><label>Conta de Destino</label>
                                                    <Field className="form-control" type="text" name="destinationAccount" maxLength="50" />
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-3">
                                                    <span className="text-danger">*</span><label>Value</label>
                                                    <Field className="form-control" type="text" name="value" maxLength="50" />
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-3">
                                                    <span className="text-danger">*</span><label>Data da Transferência</label>
                                                    <Field name="transferDate">{({field, form, meta}) => 
                                                        <InputMask {...field}
                                                            key="transferDate"
                                                            name="transferDate" 
                                                            className="form-control"
                                                            mask="9999-99-99"
                                                            placeholder="0000-00-00"
                                                            maskChar={null}
                                                            className="form-control"
                                                        />
                                                        }
                                                    </Field>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col-md-12">
                                                    <Button bsStyle="info" fill type="submit">
                                                        Enviar
                                                    </Button>
                                                    <Button style={{marginLeft:'20px'}} bsStyle="success" fill onClick={this.cleanSchedulings}>
                                                        Remover Registros
                                                    </Button>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div style={{paddingTop:'10px'}}>
                                                    <DataTable
                                                        columns={columns}
                                                        data={this.state.schedulingList}
                                                        highlightOnHover={true}
                                                        noHeader={true}
                                                        selectableRows={false}
                                                        selectableRowsHighlight={false}
                                                        pagination={true}
                                                    />
                                                </div>
                                            </Row>
                                        </Form>
                                        )
                                    }
                                </Formik>
                            }/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    user: store.userSessionState.user,
    sessionTime: store.userSessionState.sessionTime
});

const mapDispatchToProps = dispatch => bindActionCreators({ refreshUserSession }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps) (Home);