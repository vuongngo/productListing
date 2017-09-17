// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { take, put, call, fork } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import * as actions from './actions';

export function* createResource(api, { data }, { resource, thunk, resolve, reject }) {
  try {
    const detail = yield call([api, api.post], `/${resource}`, data);
    yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk));
    yield call(resolve, detail);
  } catch (e) {
    const err = yield call([e.response, 'text']);
    yield call(reject, new SubmissionError({ _error: err }));
    yield put(actions.resourceCreateFailure(resource, err, { data }, thunk));
  }
}

export function* readResourceList(api, { params }, { resource, thunk }) {
  try {
    const result = yield call([api, api.get], `/${resource}`, { params });
    yield put(actions.resourceListReadSuccess(resource, result.list, { params }, thunk));
    yield put(actions.resourceListReadMeta(resource, result.meta, { params }, thunk));
  } catch (e) {
    yield put(actions.resourceListReadFailure(resource, e, { params }, thunk));
  }
}

export function* readResourceDetail(api, { needle }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.get], `/${resource}/${needle}`);
    yield put(actions.resourceDetailReadSuccess(resource, detail, { needle }, thunk));
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(resource, e, { needle }, thunk));
  }
}

export function* updateResource(api, { needle, data }, { resource, thunk }) {
  try {
    const detail = yield call([api, api.put], `/${resource}/${needle}`, data);
    yield put(actions.resourceUpdateSuccess(resource, detail, { needle, data }, thunk));
  } catch (e) {
    yield put(actions.resourceUpdateFailure(resource, e, { needle, data }, thunk));
  }
}

export function* deleteResource(api, { needle }, { resource, thunk }) {
  try {
    yield call([api, api.delete], `/${resource}/${needle}`);
    yield put(actions.resourceDeleteSuccess(resource, { needle }, thunk));
  } catch (e) {
    yield put(actions.resourceDeleteFailure(resource, e, { needle }, thunk));
  }
}

export function* watchResourceCreateRequest(api) {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload, meta } = yield take(actions.RESOURCE_CREATE_REQUEST);
    yield call(createResource, api, payload, meta);
  }
}

export function* watchResourceListReadRequest(api) {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload, meta } = yield take(actions.RESOURCE_LIST_READ_REQUEST);
    yield call(readResourceList, api, payload, meta);
  }
}

export function* watchResourceDetailReadRequest(api) {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload, meta } = yield take(actions.RESOURCE_DETAIL_READ_REQUEST);
    yield call(readResourceDetail, api, payload, meta);
  }
}

export function* watchResourceUpdateRequest(api) {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload, meta } = yield take(actions.RESOURCE_UPDATE_REQUEST);
    yield call(updateResource, api, payload, meta);
  }
}

export function* watchResourceDeleteRequest(api) {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload, meta } = yield take(actions.RESOURCE_DELETE_REQUEST);
    yield call(deleteResource, api, payload, meta);
  }
}

export default function* ({ api }) {
  yield fork(watchResourceCreateRequest, api);
  yield fork(watchResourceListReadRequest, api);
  yield fork(watchResourceDetailReadRequest, api);
  yield fork(watchResourceUpdateRequest, api);
  yield fork(watchResourceDeleteRequest, api);
}
