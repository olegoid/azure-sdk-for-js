# Release History

## 1.0.0-beta.2 (Unreleased)

### Features Added

- Added `listRooms` method

### Breaking Changes

- Renamed `getParticipants` to `listParticipants` with `Promise<PagedAsyncIterableIterator<Partial<RoomParticipant>>>` return type
- Removed `participants` from `Room`
- Removed `roomJoinPolicy` from `Room`, all rooms are invite-only by default
- Renamed `createdDateTime` to `createdAt` in `Room`
- Rename `Room` to `CommunicationRoom`
- Removed `roomJoinPolicy` and `participants` from `UpdateRoomOptions`
- Replaced `addParticipants` and `updateParticipants` methods with `upsertParticipants`
- Renamed `RoleType` to `ParticipantRole`

### Other Changes

- Updated to `@azure/communication-common` 2.2.0.

## 1.0.0-beta.1 (2022-08-09)

The first preview of the Azure Communication Rooms Client has the following features:

- create a room with upto 6 months validity
- add, remove and update participants to the room
- create open or closed rooms
