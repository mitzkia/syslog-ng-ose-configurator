/*!
 * syslog-ng OSE configurator
 *
 * Copyright 2012, Andras Mitzki
 * License: GNU GENERAL PUBLIC LICENSE v3
 *
 * Date: Wed Dec 19 10:03:56 CET 2012
 */
var configurator = angular.module('configurator', [])
    configurator.config
    (
        function($routeProvider, $locationProvider)
        {
            $routeProvider.when ( '/howtouse', {
                templateUrl: 'howtouse.html'
            })
            $routeProvider.when('/global-options', {
                templateUrl: 'global_options.html',
                controller: global_options_ctrl
            })
            $routeProvider.when('/source-drivers/sinternal', {
                templateUrl: 'sources_template.html',
                controller: s_internal_ctrl
            })
            $routeProvider.when('/source-drivers/sfile', {
                templateUrl: 'sources_template.html',
                controller: s_file_ctrl
            })
            $routeProvider.when('/source-drivers/spipe', {
                templateUrl: 'sources_template.html',
                controller: s_pipe_ctrl
            })
            $routeProvider.when('/source-drivers/sprogram', {
                templateUrl: 'sources_template.html',
                controller: s_program_ctrl
            })
            $routeProvider.when('/source-drivers/ssunstream', {
                templateUrl: 'sources_template.html',
                controller: s_sunstream_ctrl
            })
            $routeProvider.when('/source-drivers/ssyslog', {
                templateUrl: 'sources_template.html',
                controller: s_syslog_ctrl
            })
            $routeProvider.when('/source-drivers/ssystem', {
                templateUrl: 'sources_template.html',
                controller: s_system_ctrl
            })
            $routeProvider.when('/source-drivers/stcp', {
                templateUrl: 'sources_template.html',
                controller: s_tcp_ctrl
            })
            $routeProvider.when('/source-drivers/sudp', {
                templateUrl: 'sources_template.html',
                controller: s_udp_ctrl
            })
            $routeProvider.when('/source-drivers/sunixstream', {
                templateUrl: 'sources_template.html',
                controller: s_unixstream_ctrl
            })
            $routeProvider.when('/source-drivers/sunixdgram', {
                templateUrl: 'sources_template.html',
                controller: s_unixdgram_ctrl
            })
            $routeProvider.when('/destination-drivers/dfile', {
                templateUrl: 'destinations_template.html',
                controller: d_file_ctrl
            })
            $routeProvider.when('/destination-drivers/dmongodb', {
                templateUrl: 'destinations_template.html',
                controller: d_mongodb_ctrl
            })
            $routeProvider.when('/destination-drivers/dpipe', {
                templateUrl: 'destinations_template.html',
                controller: d_pipe_ctrl
            })
            $routeProvider.when('/destination-drivers/dprogram', {
                templateUrl: 'destinations_template.html',
                controller: d_program_ctrl
            })
            $routeProvider.when('/destination-drivers/dsql', {
                templateUrl: 'destinations_template.html',
                controller: d_sql_ctrl
            })
            $routeProvider.when('/destination-drivers/dsyslog', {
                templateUrl: 'destinations_template.html',
                controller: d_syslog_ctrl
            })
            $routeProvider.when('/destination-drivers/dtcp', {
                templateUrl: 'destinations_template.html',
                controller: d_tcp_ctrl
            })
            $routeProvider.when('/destination-drivers/dudp', {
                templateUrl: 'destinations_template.html',
                controller: d_udp_ctrl
            })
            $routeProvider.when('/destination-drivers/dunixstream', {
                templateUrl: 'destinations_template.html',
                controller: d_unixstream_ctrl
            })
            $routeProvider.when('/destination-drivers/dunixdgram', {
                templateUrl: 'destinations_template.html',
                controller: d_unixdgram_ctrl
            })
            $routeProvider.when('/destination-drivers/dusertty', {
                templateUrl: 'destinations_template.html',
                controller: d_usertty_ctrl
            })
            $routeProvider.when('/logpath', {
                templateUrl: 'logpath.html',
                controller: logpath_ctrl
            })
            $routeProvider.when('/template', {
                templateUrl: 'template.html',
                controller: template_ctrl
            })
            $routeProvider.otherwise({
                redirectTo: '/global-options'
            })
        }
    );

    configurator.run
    (
        function($rootScope)
        {
            $rootScope.options =
            {
                global_options:
                [
                    {"name": "bad_hostname", "input_type": "text", "accepted_value": "regular expression", "description": " A regexp containing hostnames which should not be handled as hostnames.", "enabled": false, "value": ""},
                    {"name": "dir_group", "input_type": "text", "accepted_value": "string", "description": "The group of directories created by syslog-ng", "enabled": false, "value": "root"},
                    {"name": "dir_owner", "input_type": "text", "accepted_value": "string", "description": "The owner of directories created by syslog-ng", "enabled": false, "value": "root"},
                    {"name": "dns_cache_hosts", "input_type": "text", "accepted_value": "file name", "description": "Name of a file in /etc/hosts format that contains static IP->hostname mappings", "enabled": false, "value": ""},
                    {"name": "file_template", "input_type": "text", "accepted_value": "string", "description": "unspecified", "enabled": false, "value": ""},
                    {"name": "group", "input_type": "text", "accepted_value": "string", "description": "The default group of output files", "enabled": false, "value": "root"},
                    {"name": "local_time_zone", "input_type": "text", "accepted_value": "string", "description": "Sets the timezone used when expanding filename and tablename templates.", "enabled": false, "value": "local timezone"},
                    {"name": "owner", "input_type": "text", "accepted_value": "string", "description": "The default owner of output files", "enabled": false, "value": "root"},
                    {"name": "proto_template", "input_type": "text", "accepted_value": "string", "description": "unspecified", "enabled": false, "value": ""},
                    {"name": "recv_time_zone", "input_type": "text", "accepted_value": "string", "description": "Specifies the time zone associated with the incoming messages", "enabled": false, "value": "local timezone"},
                    {"name": "send_time_zone", "input_type": "text", "accepted_value": "string", "description": "Specifies the time zone associated with the messages sent by syslog-ng", "enabled": false, "value": "local timezone"},
                    {"name": "dir_perm", "input_type": "number", "accepted_value": "number", "description": "The permission mask of directories created by syslog-ng", "enabled": false, "value": "0700"},
                    {"name": "dns_cache_expire", "input_type": "number", "accepted_value": "number", "description": "Number of seconds while a successful lookup is cached", "enabled": false, "value": "3600"},
                    {"name": "dns_cache_expire_failed", "input_type": "number", "accepted_value": "number", "description": " Number of seconds while a failed lookup is cached", "enabled": false, "value": "60"},
                    {"name": "dns_cache_size", "input_type": "number", "accepted_value": "number", "description": "Number of hostnames in the DNS cache", "enabled": false, "value": "1007"},
                    {"name": "flush_lines", "input_type": "number", "accepted_value": "number", "description": " Specifies how many lines are flushed to a destination at a time. Syslog-ng waits for this number of lines to accumulate and sends them off in a single batch.", "enabled": false, "value": "0"},
                    {"name": "flush_timeout", "input_type": "number", "accepted_value": "number", "description": "Specifies the time syslog-ng waits for lines to accumulate in its output buffer. For more information, see the flush_lines() option.", "enabled": false, "value": "10000"},
                    {"name": "frac_digits", "input_type": "number", "accepted_value": "number", "description": "The syslog-ng application can store fractions of a second in the timestamps according to the ISO8601 format.", "enabled": false, "value": "0"},
                    {"name": "log_fetch_limit", "input_type": "number", "accepted_value": "number", "description": "The maximum number of messages fetched from a source during a single poll loop", "enabled": false, "value": "10"},
                    {"name": "log_fifo_size", "input_type": "number", "accepted_value": "number", "description": "The number of messages that the output queue can store", "enabled": false, "value": "10000"},
                    {"name": "log_iw_size", "input_type": "number", "accepted_value": "number", "description": "The size of the initial window, this value is used during flow control.", "enabled": false, "value": "1000"},
                    {"name": "log_msg_size", "input_type": "number", "accepted_value": "number", "description": "Maximum length of a message in bytes.", "enabled": false, "value": "8192"},
                    {"name": "mark_freq", "input_type": "number", "accepted_value": "number", "description": "The number of seconds between two MARK messages", "enabled": false, "value": "1200"},
                    {"name": "perm", "input_type": "number", "accepted_value": "number", "description": "The default permission for output files.", "enabled": false, "value": "0600"},
                    {"name": "stats_freq", "input_type": "number", "accepted_value": "number", "description": "The period between two STATS messages in seconds.", "enabled": false, "value": "600"},
                    {"name": "suppress", "input_type": "number", "accepted_value": "number", "description": "If several identical log messages would be sent to the destination without any other messages between the identical messages, syslog-ng can suppress the repeated messages and send the message only once, followed by the Last message repeated n times. message.", "enabled": false, "value": "0"},
                    {"name": "time_reap", "input_type": "number", "accepted_value": "number", "description": "The time to wait in seconds before an idle destination file is closed", "enabled": false, "value": "60"},
                    {"name": "time_reopen", "input_type": "number", "accepted_value": "number", "description": "The time to wait in seconds before a dead connection is reestablished.", "enabled": false, "value": "60"},
                    {"name": "time_sleep", "input_type": "number", "accepted_value": "number", "description": "The time to wait in milliseconds between each invocation of the poll() iteration.", "enabled": false, "value": "0"},
                    {"name": "chain_hostnames", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable the chained hostname format. If the log message is forwarded to the logserver via a relay, and the chain_hostnames() option is enabled, the relay adds its own hostname to the hostname of the client, separated with a / character.", "enabled": false, "value": "no"},
                    {"name": "check_hostname", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable checking whether the hostname contains valid characters.", "enabled": false, "value": "no"},
                    {"name": "create_dirs", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable directory creation for destination files", "enabled": false, "value": "no"},
                    {"name": "dns_cache", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable DNS cache usage.", "enabled": false, "value": "yes"},
                    {"name": "keep_hostname", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable hostname rewriting", "enabled": false, "value": "no"},
                    {"name": "keep_timestamp", "input_type": "select", "accepted_value": "yes or no", "description": "Specifies whether syslog-ng should accept the timestamp received from the sending application or client", "enabled": false, "value": "yes"},
                    {"name": "normalize_hostnames", "input_type": "select", "accepted_value": "yes or no", "description": "Normalize hostnames, which currently translates to converting them to lower case", "enabled": false, "value": "no"},
                    {"name": "threaded", "input_type": "select", "accepted_value": "yes or no", "description": "Enable syslog-ng OSE to run in multithreaded mode and use multiple CPUs", "enabled": false, "value": "no"},
                    {"name": "use_fqdn", "input_type": "select", "accepted_value": "yes or no", "description": " Add Fully Qualified Domain Name instead of short hostname", "enabled": false, "value": "no"},
                    {"name": "mark_mode", "input_type": "select_mark_mode", "accepted_value": "yes or no", "description": "unspecified", "enabled": false, "value": ""},
                    {"name": "use_dns", "input_type": "select_use_dns", "accepted_value": "yes or no", "description": "Enable or disable DNS usage", "enabled": false, "value": "yes"},
                    {"name": "ts_format", "input_type": "select_ts_format", "accepted_value": "ts format values", "description": "Specifies the timestamp format used when syslog-ng itself formats a timestamp and nothing else specifies a format", "enabled": false, "value": "rfc3164"},
                    {"name": "stats_level", "input_type": "select_stats_level", "accepted_value": "yes or no", "description": " Specifies the detail of statistics syslog-ng collects about the processed messages", "enabled": false, "value": "0"},
                ],
                source_options:
                [
                    {"name": "log_iw_size", "input_type": "number", "accepted_value": "number", "description": "The size of the initial window, this value is used during flow control.", "enabled": false, "value": "1000"},
                    {"name": "chain_hostnames", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable the chained hostname format. If the log message is forwarded to the logserver via a relay, and the chain_hostnames() option is enabled, the relay adds its own hostname to the hostname of the client, separated with a / character.", "enabled": false, "value": "no"},
                    {"name": "normalize_hostnames", "input_type": "select", "accepted_value": "yes or no", "description": "Normalize hostnames, which currently translates to converting them to lower case", "enabled": false, "value": "no"},
                    {"name": "keep_hostname", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable hostname rewriting", "enabled": false, "value": "no"},
                    {"name": "use_fqdn", "input_type": "select", "accepted_value": "yes or no", "description": " Add Fully Qualified Domain Name instead of short hostname", "enabled": false, "value": "no"},
                    {"name": "use_dns", "input_type": "select_use_dns", "accepted_value": "yes or no", "description": "Enable or disable DNS usage", "enabled": false, "value": "yes"},
                    {"name": "dns_cache", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable DNS cache usage.", "enabled": false, "value": "yes"},
                    {"name": "program_override", "input_type": "text", "accepted_value": "string", "description": " Replaces the $PROGRAM part of the message with the parameter string.", "enabled": false, "value": ""},
                    {"name": "host_override", "input_type": "text", "accepted_value": "string", "description": " Replaces the $HOST part of the message with the parameter string.", "enabled": false, "value": ""},
                    {"name": "log_prefix", "input_type": "text", "accepted_value": "string", "description": "A string added to the beginning of every log message. DEPRECATED", "enabled": false, "value": ""},
                    {"name": "keep_timestamp", "input_type": "select", "accepted_value": "yes or no", "description": "Specifies whether syslog-ng should accept the timestamp received from the sending application or client", "enabled": false, "value": "yes"},
                    {"name": "tags", "input_type": "text", "accepted_value": "string list", "description": "Label the messages received from the source with custom tags. Tags must be unique, and enclosed between double quotes. When adding multiple tags, separate them with comma.", "enabled": false, "value": ""},
                ],
                source_reader_options:
                [
                    {"name": "time_zone", "input_type": "text", "accepted_value": "string", "description": "Convert timestamps to the timezone specified by this option.", "enabled": false, "value": ""},
                    {"name": "check_hostname", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable checking whether the hostname contains valid characters.", "enabled": false, "value": "no"},
                    {"name": "flags", "input_type": "select_flags", "accepted_value": "flags list", "description": " Specifies the log parsing options of the source", "enabled": false, "value": ""},
                    {"name": "log_msg_size", "input_type": "number", "accepted_value": "number", "description": "Maximum length of a message in bytes.", "enabled": false, "value": "8192"},
                    {"name": "log_fetch_limit", "input_type": "number", "accepted_value": "number", "description": "The maximum number of messages fetched from a source during a single poll loop", "enabled": false, "value": "10"},
                    {"name": "pad_size", "input_type": "number", "accepted_value": "number", "description": "Specifies input padding.", "enabled": false, "value": "0"},
                    {"name": "encoding", "input_type": "text", "accepted_value": "string", "description": "Specifies the characterset (encoding, for example UTF-8) of messages using the legacy BSD-syslog protocol", "enabled": false, "value": ""},
                    {"name": "format", "input_type": "text", "accepted_value": "string", "description": "unspecified", "enabled": false, "value": ""},
                    {"name": "default_facility", "input_type": "select_default_facility", "accepted_value": "facility list", "description": "This parameter assigns a facility value to the messages received from the file source", "enabled": false, "value": "kern"},
                    {"name": "default_level", "input_type": "select_default_level", "accepted_value": "level list", "description": "This parameter assigns an emergency level to the messages received from the file source", "enabled": false, "value": "emerg"},
                ],
                source_reader_option_flags:
                [
                    {"name": "check_hostname", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable checking whether the hostname contains valid characters.", "enabled": false, "value": "no"},
                ],
                source_affile_option:
                [
                    {"name": "file_name", "input_type": "text_file_name", "accepted_value": "string", "description": "The file to read messages from", "enabled": true, "value": ""},
                    {"name": "follow_freq", "input_type": "number", "accepted_value": "number", "description": "Indicates that the source should be checked periodically", "enabled": false, "value": "1"},
                ],
                source_afpipe_option:
                [
                    {"name": "pipe_name", "input_type": "text_pipe_name", "accepted_value": "string", "description": "The filename of the pipe to read messages from", "enabled": true, "value": ""},
                    {"name": "optional", "input_type": "select", "accepted_value": "yes or no", "description": "Instruct syslog-ng to ignore the error if a specific source cannot be initialized.", "enabled": false, "value": ""},
                ],
                source_afprogram_option:
                [
                    {"name": "program_name", "input_type": "text_program_name", "accepted_value": "string", "description": "The name of the application to start and read messages from", "enabled": true, "value": ""},
                ],
                source_afsystem_option:
                [
                    {"name": "no-option", "input_type": "no-option"},
                ],
                source_afunix_option:
                [
                    {"name": "group", "input_type": "text", "accepted_value": "string", "description": "The default group of output files", "enabled": false, "value": "root"},
                    {"name": "owner", "input_type": "text", "accepted_value": "string", "description": "The default owner of output files", "enabled": false, "value": "root"},
                    {"name": "perm", "input_type": "number", "accepted_value": "number", "description": "The default permission for output files.", "enabled": false, "value": "0600"},
                    {"name": "optional", "input_type": "select", "accepted_value": "yes or no", "description": "Instruct syslog-ng to ignore the error if a specific source cannot be initialized.", "enabled": false, "value": ""},
                ],
                source_afinet_option:
                [
                    {"name": "localip", "input_type": "text", "accepted_value": "string", "description": "The IP address to bind to before connecting to target.", "enabled": false, "value": "0.0.0.0"},
                    {"name": "ip", "input_type": "text", "accepted_value": "string", "description": " The IP address to bind to", "enabled": true, "value": "0.0.0.0"},
                    {"name": "localport", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                    {"name": "port", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                ],
                source_afsocket_stream_params:
                [
                    {"name": "keep_alive", "input_type": "select", "accepted_value": "yes or no", "description": "Specifies whether connections to destinations should be closed when syslog-ng is restarted", "enabled": false, "value": "yes"},
                    {"name": "max_connections", "input_type": "number", "accepted_value": "number", "description": " Limits the number of simultaneously open connections", "enabled": false, "value": "256"},
                ],
                source_afsyslog_option:
                [
                    {"name": "transport", "input_type": "select_transport", "accepted_value": "transport options", "description": "Specifies the protocol used to receive messages from the source", "enabled": false, "value": ""},
                ],
                source_afstreams_option:
                [
                    {"name": "door", "input_type": "text", "accepted_value": "string", "description": "Specifies the filename of a door to open, needed on Solaris above 2.5.1", "enabled": false, "value": ""},
                    {"name": "stream_name", "input_type": "text", "accepted_value": "string", "description": "Stream device to open", "enabled": false, "value": ""},
                ],
                dest_driver_option:
                [
                    {"name": "log_fifo_size", "input_type": "number", "accepted_value": "number", "description": "The number of messages that the output queue can store", "enabled": false, "value": "10000"},
                    {"name": "throttle", "input_type": "number", "accepted_value": "number", "description": "Sets the maximum number of messages sent to the destination per second.  Specifying 0 or a lower value sets the output limit to unlimited", "enabled": false, "value": "0"},
                ],
                dest_writer_option:
                [
                    {"name": "flags", "input_type": "select_flags", "accepted_value": "flags list", "description": "Specifies the log parsing options of the destination", "enabled": false, "value": ""},
                    {"name": "flush_lines", "input_type": "number", "accepted_value": "number", "description": " Specifies how many lines are flushed to a destination at a time. Syslog-ng waits for this number of lines to accumulate and sends them off in a single batch.", "enabled": false, "value": "0"},
                    {"name": "flush_timeout", "input_type": "number", "accepted_value": "number", "description": "Specifies the time syslog-ng waits for lines to accumulate in its output buffer. For more information, see the flush_lines() option.", "enabled": false, "value": "10000"},
                    {"name": "suppress", "input_type": "number", "accepted_value": "number", "description": "If several identical log messages would be sent to the destination without any other messages between the identical messages, syslog-ng can suppress the repeated messages and send the message only once, followed by the Last message repeated n times. message.", "enabled": false, "value": "0"},
                    {"name": "template", "input_type": "text", "accepted_value": "string", "description": " The macro that contains the part of the message that the parser will process", "enabled": false, "value": ""},
                    {"name": "template_escape", "input_type": "select", "accepted_value": "yes or no", "description": "Turns on escaping for the ', \", and backspace characters in templated output files.", "enabled": false, "value": "no"},
                    {"name": "time_zone", "input_type": "text", "accepted_value": "string", "description": "Convert timestamps to the timezone specified by this option.", "enabled": false, "value": ""},
                    {"name": "ts_format", "input_type": "select_ts_format", "accepted_value": "string", "description": "Override the global timestamp format (set in the global ts_format() parameter) for the specific destination", "enabled": false, "value": "rfc3164"},
                    {"name": "frac_digits", "input_type": "number", "accepted_value": "number", "description": "The syslog-ng application can store fractions of a second in the timestamps according to the ISO8601 format.", "enabled": false, "value": "0"},
                    {"name": "pad_size", "input_type": "number", "accepted_value": "number", "description": "Specifies input padding.", "enabled": false, "value": "0"},
                ],
                dest_affile_option:
                [
                    {"name": "file_name", "input_type": "text_file_name", "accepted_value": "string", "description": "The filename to write messages", "enabled": true, "value": ""},
                    {"name": "dir_group", "input_type": "text", "accepted_value": "string", "description": "The group of directories created by syslog-ng", "enabled": false, "value": "root"},
                    {"name": "dir_owner", "input_type": "text", "accepted_value": "string", "description": "The owner of directories created by syslog-ng", "enabled": false, "value": "root"},
                    {"name": "dir_perm", "input_type": "number", "accepted_value": "number", "description": "The permission mask of directories created by syslog-ng", "enabled": false, "value": "0700"},
                    {"name": "group", "input_type": "text", "accepted_value": "string", "description": "The default group of output files", "enabled": false, "value": "root"},
                    {"name": "owner", "input_type": "text", "accepted_value": "string", "description": "The default owner of output files", "enabled": false, "value": "root"},
                    {"name": "perm", "input_type": "number", "accepted_value": "number", "description": "The default permission for output files.", "enabled": false, "value": "0600"},
                    {"name": "optional", "input_type": "select", "accepted_value": "yes or no", "description": "Instruct syslog-ng to ignore the error if a specific source cannot be initialized.", "enabled": false, "value": ""},
                    {"name": "create_dirs", "input_type": "select", "accepted_value": "yes or no", "description": "Enable or disable directory creation for destination files", "enabled": false, "value": "no"},
                    {"name": "overwrite_if_older", "input_type": "number", "accepted_value": "number", "description": "If set to a value higher than 0, syslog-ng checks when the file was last modified before starting to write into the file.", "enabled": false, "value": "0"},
                    {"name": "fsync", "input_type": "select", "accepted_value": "yes or no", "description": "Forces an fsync() call on the destination fd after each write", "enabled": false, "value": "no"},
                    {"name": "local_time_zone", "input_type": "text", "accepted_value": "string", "description": "Sets the timezone used when expanding filename and tablename templates.", "enabled": false, "value": "local timezone"},
                ],
                dest_afpipe_option:
                [
                    {"name": "pipe_name", "input_type": "text_pipe_name", "accepted_value": "string", "description": "The filename of the pipe to read messages from", "enabled": true, "value": ""},
                    {"name": "group", "input_type": "text", "accepted_value": "string", "description": "The default group of output files", "enabled": false, "value": "root"},
                    {"name": "owner", "input_type": "text", "accepted_value": "string", "description": "The default owner of output files", "enabled": false, "value": "root"},
                    {"name": "perm", "input_type": "number", "accepted_value": "number", "description": "The default permission for output files.", "enabled": false, "value": "0600"},
                ],
                afmongodb_option:
                [
                    {"name": "host", "input_type": "text", "accepted_value": "string", "description": "Hostname or IP address of the database server", "enabled": false, "value": "localhost"},
                    {"name": "port", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                    {"name": "database", "input_type": "text", "accepted_value": "string", "description": "The name of the MongoDB database where the log messages are stored.", "enabled": false, "value": "syslog"},
                    {"name": "collection", "input_type": "text", "accepted_value": "string", "description": " The name of the MongoDB collection where the log messages are stored (collections are similar to SQL tables)", "enabled": false, "value": "messages"},
                    {"name": "username", "input_type": "text", "accepted_value": "string", "description": "Name of the database user.", "enabled": false, "value": ""},
                    {"name": "password", "input_type": "text", "accepted_value": "string", "description": " Password of the database user", "enabled": false, "value": ""},
                ],
                dest_afprogram_option:
                [
                    {"name": "program_name", "input_type": "text_program_name", "accepted_value": "string", "description": "The name of the application to start and read messages from", "enabled": true, "value": ""},
                ],
                dest_afinet_option:
                [
                    {"name": "localip", "input_type": "text", "accepted_value": "string", "description": "The IP address to bind to before connecting to target.", "enabled": false, "value": "0.0.0.0"},
                    {"name": "destport", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                    {"name": "localport", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                    {"name": "port", "input_type": "text", "accepted_value": "string", "description": "The port number to bind to", "enabled": false, "value": ""},
                ],
                dest_afinet_tcp_option:
                [
                    {"name": "ip", "input_type": "text_ip", "accepted_value": "string", "description": "The IP address to connect to", "enabled": true, "value": ""},
                ],
                dest_afinet_udp_option:
                [
                    {"name": "ip", "input_type": "text_ip", "accepted_value": "string", "description": "The IP address to connect to", "enabled": true, "value": ""},
                    {"name": "spoof_source", "input_type": "select", "accepted_value": "yes or no", "description": "Enables source address spoofing. This means that the host running syslog-ng generates UDP packets with the source IP address matching the original sender of the message", "enabled": false, "value": "no"},
                ],
                dest_afsocket_option:
                [
                    {"name": "keep_alive", "input_type": "select", "accepted_value": "yes or no", "description": "Specifies whether connections to destinations should be closed when syslog-ng is restarted", "enabled": false, "value": "yes"},
                ],
                dest_afsyslog_option:
                [
                    {"name": "ip", "input_type": "text_ip", "accepted_value": "string", "description": "The IP address to connect to", "enabled": true, "value": ""},
                    {"name": "transport", "input_type": "select_transport", "accepted_value": "transport options", "description": "Specifies the protocol used to receive messages from the source", "enabled": false, "value": ""},
                    {"name": "spoof_source", "input_type": "select", "accepted_value": "yes or no", "description": "Enables source address spoofing. This means that the host running syslog-ng generates UDP packets with the source IP address matching the original sender of the message", "enabled": false, "value": "no"},
                ],
                tls_option:
                [
                    {"name": "peer_verify", "input_type": "select_peer_verify", "accepted_value": "string", "description": "Verification method of the peer, the four possible values is a combination of two properties of validation: whether the peer is required to provide a certificate (required or optional prefix), and whether the certificate provided needs to be trusted or not", "enabled": false, "value": "required-trusted"},
                    {"name": "key_file", "input_type": "text", "accepted_value": "string", "description": "Name of a file, that contains an unencrypted private key in PEM format, suitable as a TLS key", "enabled": false, "value": ""},
                    {"name": "cert_file", "input_type": "text", "accepted_value": "string", "description": " Name of a file, that contains an X.509 certificate in PEM format, suitable as a TLS certificate, matching the private key.", "enabled": false, "value": ""},
                    {"name": "ca_dir", "input_type": "text", "accepted_value": "string", "description": "Name of a directory, that contains a set of trusted CA certificates in PEM format.", "enabled": false, "value": ""},
                    {"name": "crl_dir", "input_type": "text", "accepted_value": "string", "description": " Name of a directory that contains the Certificate Revocation Lists for trusted CAs", "enabled": false, "value": ""},
                    {"name": "trusted_keys", "input_type": "text", "accepted_value": "string", "description": "To accept connections only from hosts using certain certificates having specific SHA-1 fingerprints, list the fingerprints of the accepted certificates in this parameter", "enabled": false, "value": ""},
                    {"name": "trusted_dn", "input_type": "text", "accepted_value": "string", "description": "To accept connections only from hosts using certain certificates signed by the trusted CAs, list the distinguished names of the accepted certificates in this parameter", "enabled": false, "value": ""},
                    {"name": "cipher_suite", "input_type": "text", "accepted_value": "string", "description": "Specifies the cipher, hash, and key-exchange algorithms used for the encryption", "enabled": false, "value": "aes-128-cbc"},
                ],
                socket_option:
                [
                    {"name": "so_sndbuf", "input_type": "number", "accepted_value": "number", "description": "Specifies the size of the socket send buffer in bytes", "enabled": false, "value": "0"},
                    {"name": "so_rcvbuf", "input_type": "number", "accepted_value": "number", "description": "Specifies the size of the socket receive buffer in bytes", "enabled": false, "value": "0"},
                    {"name": "so_broadcast", "input_type": "select", "accepted_value": "yes or no", "description": "This option controls the SO_BROADCAST socket option required to make syslog-ng send messages to a broadcast address", "enabled": false, "value": "no"},
                    {"name": "so_keepalive", "input_type": "select", "accepted_value": "yes or no", "description": "Enables keep-alive messages, keeping the socket open", "enabled": false, "value": "no"},
                ],
                inet_socket_option:
                [
                    {"name": "ip_ttl", "input_type": "number", "accepted_value": "number", "description": "Specifies the Time-To-Live value of outgoing packets", "enabled": false, "value": "0"},
                    {"name": "ip_tos", "input_type": "number", "accepted_value": "number", "description": "Specifies the Type-of-Service value of outgoing packets", "enabled": false, "value": "0"},
                ],
                dest_afsql_option:
                [
                    {"name": "type", "input_type": "select_type", "accepted_value": "sql database types", "description": "Specifies the type of the database, that is, the DBI database driver to use", "enabled": false, "value": "mysql"},
                    {"name": "host", "input_type": "text", "accepted_value": "string", "description": "Hostname of the database server", "enabled": false, "value": ""},
                    {"name": "port", "input_type": "text", "accepted_value": "string", "description": "The port number to connect to", "enabled": false, "value": ""},
                    {"name": "username", "input_type": "text", "accepted_value": "string", "description": "Name of the database user", "enabled": false, "value": ""},
                    {"name": "password", "input_type": "text", "accepted_value": "string", "description": "Password of the database user", "enabled": false, "value": ""},
                    {"name": "database", "input_type": "text_database", "accepted_value": "string", "description": "Name of the database that stores the logs", "enabled": false, "value": "logs"},
                    {"name": "table", "input_type": "text_table", "accepted_value": "string", "description": "Name of the database table to use (can include macros)", "enabled": false, "value": "messages"},
                    {"name": "columns", "input_type": "text_columns", "accepted_value": "string", "description": "Name of the columns storing the data in fieldname [dbtype] format. ", "enabled": false, "value": '"date", "facility", "level", "host", "program", "pid", "message"'},
                    {"name": "indexes", "input_type": "text", "accepted_value": "string", "description": "The list of columns that are indexed by the database to speed up searching", "enabled": false, "value": '"date", "facility", "host", "program"'},
                    {"name": "values", "input_type": "text_values", "accepted_value": "string", "description": "The parts of the message to store in the fields specified in the columns parameter.", "enabled": false, "value": '"${R_YEAR}-${R_MONTH}-${R_DAY} ${R_HOUR}:${R_MIN}:${R_SEC}", "$FACILITY", "$LEVEL", "$HOST", "$PROGRAM", "$PID", "$MSGONLY"'},
                    {"name": "frac_digits", "input_type": "number", "accepted_value": "number", "description": "The syslog-ng application can store fractions of a second in the timestamps according to the ISO8601 format.", "enabled": false, "value": "0"},
                    {"name": "time_zone", "input_type": "text", "accepted_value": "string", "description": "Convert timestamps to the timezone specified by this option.", "enabled": false, "value": ""},
                    {"name": "local_time_zone", "input_type": "text", "accepted_value": "string", "description": "Sets the timezone used when expanding filename and tablename templates.", "enabled": false, "value": "local timezone"},
                    {"name": "null", "input_type": "text", "accepted_value": "string", "description": "If the content of a column matches the string specified in the null() parameter, the contents of the column will be replaced with an SQL NULL value", "enabled": false, "value": ""},
                    {"name": "retries", "input_type": "number", "accepted_value": "number", "description": "The number of insertion attempts", "enabled": false, "value": "3"},
                    {"name": "flush_lines", "input_type": "number", "accepted_value": "number", "description": " Specifies how many lines are flushed to a destination at a time. Syslog-ng waits for this number of lines to accumulate and sends them off in a single batch.", "enabled": false, "value": "0"},
                    {"name": "flush_timeout", "input_type": "number", "accepted_value": "number", "description": "Specifies the time syslog-ng waits for lines to accumulate in its output buffer. For more information, see the flush_lines() option.", "enabled": false, "value": "10000"},
                    {"name": "session_statements", "input_type": "text", "accepted_value": "string", "description": "unspecified", "enabled": false, "value": ""},
                    {"name": "flags", "input_type": "select_sql_flags", "accepted_value": "flags", "description": "Flags related to the sql() destination.", "enabled": false, "value": ""},
                ],
                dest_afuser:
                [
                    {"name": "usertty", "input_type": "text", "accepted_value": "string", "description": "username who should receive a copy of matching messages", "enabled": false, "value": ""},
                ],
            };

            $rootScope.source_reader_option = $rootScope.options.source_reader_options.concat
                                                (
                                                    $rootScope.options.source_options
                                                );

            $rootScope.inet_socket_option = $rootScope.options.inet_socket_option.concat
                                                (
                                                    $rootScope.options.socket_option
                                                );

            $rootScope.source_afinet_option = $rootScope.options.source_afinet_option.concat
                                                (
                                                    $rootScope.source_reader_option,
                                                    $rootScope.inet_socket_option
                                                );

            $rootScope.dest_afinet_option = $rootScope.options.dest_afinet_option.concat
                                                (
                                                    $rootScope.inet_socket_option,
                                                    $rootScope.options.dest_writer_option,
                                                    $rootScope.options.dest_afsocket_option,
                                                    $rootScope.options.dest_driver_option
                                                );

            $rootScope.all_internal_sources = [];
            $rootScope.all_file_sources = [];
            $rootScope.all_pipe_sources = [];
            $rootScope.all_program_sources = [];
            $rootScope.all_syslog_sources = [];
            $rootScope.all_system_sources = [];
            $rootScope.all_sunstream_sources = [];
            $rootScope.all_tcp_sources = [];
            $rootScope.all_udp_sources = [];
            $rootScope.all_unixdgram_sources = [];
            $rootScope.all_unixstream_sources = [];

            $rootScope.all_file_destinations = [];
            $rootScope.all_mongodb_destinations = [];
            $rootScope.all_pipe_destinations = [];
            $rootScope.all_program_destinations = [];
            $rootScope.all_sql_destinations = [];
            $rootScope.all_syslog_destinations = [];
            $rootScope.all_tcp_destinations = [];
            $rootScope.all_udp_destinations = [];
            $rootScope.all_unixdgram_destinations = [];
            $rootScope.all_unixstream_destinations = [];
            $rootScope.all_usertty_destinations = [];

            $rootScope.include = [];
            $rootScope.paths = [];

            $rootScope.option_groups_for_drivers =
            {
                s_internal: [$rootScope.options.source_options],
                s_file: [$rootScope.options.source_affile_option, $rootScope.source_reader_option],
                s_pipe: [$rootScope.options.source_afpipe_option, $rootScope.source_reader_option],
                s_program: [$rootScope.options.source_afprogram_option, $rootScope.source_reader_option],
                s_sunstream: [$rootScope.options.source_afstreams_option],
                s_system: [$rootScope.options.source_afsystem_option],
                s_syslog: [$rootScope.options.source_afsyslog_option, $rootScope.options.tls_option, $rootScope.options.source_afsocket_stream_params, $rootScope.source_afinet_option],
                s_tcp: [$rootScope.options.tls_option, $rootScope.source_afinet_option, $rootScope.options.source_afsocket_stream_params],
                s_udp: [$rootScope.source_afinet_option],
                s_unixdgram: [$rootScope.options.source_afunix_option, $rootScope.options.socket_option, $rootScope.options.source_afsocket_stream_params, $rootScope.source_reader_option],
                s_unixstream: [$rootScope.options.source_afunix_option, $rootScope.options.socket_option, $rootScope.options.source_afsocket_stream_params, $rootScope.source_reader_option],

                d_file: [$rootScope.options.dest_affile_option, $rootScope.options.dest_driver_option, $rootScope.options.dest_writer_option],
                d_mongodb: [$rootScope.options.afmongodb_option, $rootScope.options.dest_driver_option],
                d_pipe: [$rootScope.options.dest_afpipe_option, $rootScope.options.dest_driver_option, $rootScope.options.dest_writer_option],
                d_program: [$rootScope.options.dest_afprogram_option, $rootScope.options.dest_driver_option, $rootScope.options.dest_writer_option],
                d_sql: [$rootScope.options.dest_afsql_option, $rootScope.options.dest_driver_option],
                d_syslog: [$rootScope.options.dest_afsyslog_option, $rootScope.options.tls_option, $rootScope.dest_afinet_option],
                d_tcp: [$rootScope.options.dest_afinet_tcp_option, $rootScope.options.tls_option, $rootScope.dest_afinet_option],
                d_udp: [$rootScope.options.dest_afinet_udp_option, $rootScope.dest_afinet_option],
                d_unixdgram: [$rootScope.options.dest_afsocket_option, $rootScope.options.socket_option, $rootScope.options.dest_driver_option, $rootScope.options.dest_writer_option],
                d_unixstream: [$rootScope.options.dest_afsocket_option, $rootScope.options.socket_option, $rootScope.options.dest_driver_option, $rootScope.options.dest_writer_option],
                d_usertty: [$rootScope.options.dest_afuser],

            };

            $rootScope.deepCopy = function(object)
            {
                if (Object.prototype.toString.call(object) === '[object Array]')
                {
                    var copy = [];
                    for (var i = 0; i < object.length; i++)
                        copy[i] = $rootScope.deepCopy(object[i]);

                    return copy;
                }
                if (typeof object === 'object')
                {
                    var copy = {};
                    for (var key in object)
                    {
                        if (object.hasOwnProperty(key))
                            copy[key] = $rootScope.deepCopy(object[key]);
                    }
                    return copy;
                }
                return object;
            };

            $rootScope.$on ( "$routeChangeSuccess", function()
                {
                    setTimeout($rootScope.refreshMenuHighligh, 0);
                }
            );

            $rootScope.generate_driver_object_from_options = function (all_driver_objects, actual_driver_options)
            {
                var actual_object = [];
                for (var i in actual_driver_options)
                {
                    var options = $rootScope.deepCopy(actual_driver_options[i]);
                    actual_object = actual_object.concat(options);
                }
                all_driver_objects.push({"source_name": "", "visible": true, "options": actual_object});
            }

            $rootScope.add_value_to_option_in_driver = function(driver_object, option_name, new_option_value)
            {
                for (var i in driver_object[0].options)
                {
                    for (var k in driver_object[0].options[i])
                    {
                        if (driver_object[0].options[i].name == option_name)
                        {
                            driver_object[0].options[i].value = new_option_value
                            driver_object[0].options[i].enabled = true
                        }
                    }
                }
            };

            $rootScope.remove_specified_driver = function (driver_object, driver_group_name)
            {
                console.log(driver_object, driver_group_name)
                for (var i in driver_object)
                {
                    if (driver_object[i].source_name == driver_group_name || driver_object[i].destination_name == driver_group_name)
                    {
                        driver_object.splice(i,1)
                    }
                }
            }

            $rootScope.collect_all_sources_and_destinations = function ()
            {
                $rootScope.collected_sources = $rootScope.all_internal_sources.concat(
                                                    $rootScope.all_file_sources,
                                                    $rootScope.all_pipe_sources,
                                                    $rootScope.all_program_sources,
                                                    $rootScope.all_sunstream_sources,
                                                    $rootScope.all_syslog_sources,
                                                    $rootScope.all_system_sources,
                                                    $rootScope.all_tcp_sources,
                                                    $rootScope.all_udp_sources,
                                                    $rootScope.all_unixdgram_sources,
                                                    $rootScope.all_unixstream_sources);

                $rootScope.collected_destinations = $rootScope.all_file_destinations.concat(
                                                    $rootScope.all_mongodb_destinations,
                                                    $rootScope.all_pipe_destinations,
                                                    $rootScope.all_program_destinations,
                                                    $rootScope.all_sql_destinations,
                                                    $rootScope.all_syslog_destinations,
                                                    $rootScope.all_tcp_destinations,
                                                    $rootScope.all_udp_destinations,
                                                    $rootScope.all_unixdgram_destinations,
                                                    $rootScope.all_unixstream_destinations,
                                                    $rootScope.all_usertty_destinations);
            };

            $rootScope.refreshMenuHighligh = function()
            {
                var url = window.location.href;
                var vertical_menu = '#/' + url.match("#/?([^/]+)(/.*)?$")[1];
                var horizontal_menu = '';
                var matches = url.match("#/?[^/]+(/.+)$");
                if (matches !== null)
                    horizontal_menu = matches[1];

                $('#vertical_menu ul li a').each
                (
                    function(index, menu_item)
                    {
                        if (menu_item.href.indexOf(vertical_menu) != -1)
                        {
                            $(menu_item).addClass('selected');
                        }
                        else
                        {
                            $(menu_item).removeClass('selected');
                        }
                    }
                );

                $('#horizontal_menu ul li a').each
                (
                    function(index, menu_item)
                    {
                        if (menu_item.href.indexOf(horizontal_menu) != -1)
                        {
                            $(menu_item).addClass('selected');
                        }
                        else
                        {
                            $(menu_item).removeClass('selected');
                        }
                    }
                );
            }

        }
    );

function AppCtrl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
}

function global_options_ctrl($scope, $routeParams) {
    $scope.name = "Global Options";
}

function s_internal_ctrl($scope, $routeParams) {
    $scope.name = "Internal";

    $scope.all_sources = $scope.all_internal_sources;
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_internal);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_file_ctrl($scope, $routeParams) {
    $scope.name = "File";

    $scope.all_sources = $scope.all_file_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_file);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_pipe_ctrl($scope, $routeParams) {
    $scope.name = "Pipe";

    $scope.all_sources = $scope.all_pipe_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_pipe);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_program_ctrl($scope, $routeParams) {
    $scope.name = "Program";

    $scope.all_sources = $scope.all_program_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_program);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_sunstream_ctrl($scope, $routeParams) {
    $scope.name = "SunStream";

    $scope.all_sources = $scope.all_sunstream_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_sunstream);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_system_ctrl($scope, $routeParams) {
    $scope.name = "System";

    $scope.all_sources = $scope.all_system_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_system);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_syslog_ctrl($scope, $routeParams) {
    $scope.name = "Syslog";

    $scope.all_sources = $scope.all_syslog_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_syslog);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_tcp_ctrl($scope, $routeParams) {
    $scope.name = "TCP";

    $scope.all_sources = $scope.all_tcp_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_tcp);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_udp_ctrl($scope, $routeParams) {
    $scope.name = "UDP";

    $scope.all_sources = $scope.all_udp_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_udp);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_unixdgram_ctrl($scope, $routeParams) {
    $scope.name = "UnixDgram";

    $scope.all_sources = $scope.all_unixdgram_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_unixdgram);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function s_unixstream_ctrl($scope, $routeParams) {
    $scope.name = "UnixStream";

    $scope.all_sources = $scope.all_unixstream_sources

    $scope.add_new_source = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_sources, $scope.option_groups_for_drivers.s_unixstream);
    }

    $scope.remove_source = function()
    {
        $scope.remove_specified_driver($scope.all_sources, $scope.selected_for_remove_group_name);
    }
}

function d_file_ctrl($scope, $routeParams) {
    $scope.name = "File";

    $scope.all_destinations = $scope.all_file_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_file);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_mongodb_ctrl($scope, $routeParams) {
    $scope.name = "MongoDB";

    $scope.all_destinations = $scope.all_mongodb_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_mongodb);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_pipe_ctrl($scope, $routeParams) {
    $scope.name = "Pipe";

    $scope.all_destinations = $scope.all_pipe_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_pipe);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_program_ctrl($scope, $routeParams) {
    $scope.name = "Program";

    $scope.all_destinations = $scope.all_program_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_program);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_sql_ctrl($scope, $routeParams) {
    $scope.name = "SQL";

    $scope.all_destinations = $scope.all_sql_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_sql);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_syslog_ctrl($scope, $routeParams) {
    $scope.name = "Syslog";

    $scope.all_destinations = $scope.all_syslog_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_syslog);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_tcp_ctrl($scope, $routeParams) {
    $scope.name = "TCP";

    $scope.all_destinations = $scope.all_tcp_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_tcp);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_udp_ctrl($scope, $routeParams) {
    $scope.name = "UDP";

    $scope.all_destinations = $scope.all_udp_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_udp);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_unixdgram_ctrl($scope, $routeParams) {
    $scope.name = "UnixDgram";

    $scope.all_destinations = $scope.all_unixdgram_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_unixdgram);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_unixstream_ctrl($scope, $routeParams) {
    $scope.name = "UnixStream";

    $scope.all_destinations = $scope.all_unixstream_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_unixstream);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function d_usertty_ctrl($scope, $routeParams) {
    $scope.name = "UserTTY";

    $scope.all_destinations = $scope.all_usertty_destinations
    $scope.selected_for_remove_group_name = [];

    $scope.add_new_destination = function ()
    {
        $scope.generate_driver_object_from_options($scope.all_destinations, $scope.option_groups_for_drivers.d_usertty);
    }

    $scope.remove_destination = function()
    {
        $scope.remove_specified_driver($scope.all_destinations, $scope.selected_for_remove_group_name);
    }
}

function logpath_ctrl($scope, $routeParams, $http) {

    $scope.config_template = null;

    $scope.include = {"enabled": false};

    $scope.collect_all_sources_and_destinations();

    $scope.generate_enabled_options = function() {
        return function (text, render) {
            var tls_options = ["ca_dir", "crl_dir", "cert_file", "key_file", "cipher_suite", "trusted_keys", "trusted_dn", "peer_verify"];
            var types_for_quoting = ['text_file_name','text_pipe_name','text_program_name','text_ip', 'usertty'];
            var types_for_quoting_inside_parenthesis = ['text', 'select_mark_mode'];

            if (types_for_quoting.indexOf(this.input_type) != -1) {
                return '"'+this.value+'"';
            }
            else if (tls_options.indexOf(this.name) != -1) {
                return "tls ("+this.name+"("+this.value+"))";
            }
            else if (types_for_quoting_inside_parenthesis.indexOf(this.input_type) != -1){
                return this.name+'("'+this.value+'")';
            }
            else {
                return this.name+'('+this.value+')';
            }
        }
    }

    $http.get('config_template')
       .then(function(res){
          $scope.config_template = res.data;
        });

    $scope.add_path = function() {
        $scope.paths.push({"sources": [], "destinations": [], "flags": []});
    }

    $scope.generate_config = function() {
        if ($scope.config_template === null)
            return "LOADING...";

        var config = Mustache.render($scope.config_template, $scope);
        return config;
    }
}

function template_ctrl($scope, $routeParams) {

    $scope.template_file_source = {value: ""}
    $scope.template_tcp_ip = {value: ""}
    $scope.template_tcp_port = {value: ""}

    $scope.add_template1 = function()
    {

        if ( $('#template_file_source1')[0].checkValidity() && $('#template_tcp_ip1')[0].checkValidity() && $('#template_tcp_port1')[0].checkValidity())
        {

            $scope.generate_driver_object_from_options($scope.all_file_sources, $scope.option_groups_for_drivers.s_file);
            $scope.add_value_to_option_in_driver($scope.all_file_sources,'file_name',$scope.template_file_source.value);
            $scope.all_file_sources[0].source_name = 's_file'

            $scope.generate_driver_object_from_options($scope.all_tcp_destinations, $scope.option_groups_for_drivers.d_tcp);
            $scope.add_value_to_option_in_driver($scope.all_tcp_destinations,'ip',$scope.template_tcp_ip.value);
            $scope.add_value_to_option_in_driver($scope.all_tcp_destinations,'port',$scope.template_tcp_port.value);
            $scope.all_tcp_destinations[0].destination_name = 'd_tcp'

            $scope.collect_all_sources_and_destinations();

            $scope.paths.push({"sources": ["s_file"], "destinations": ["d_tcp"], "flags": []});

            alert('Config generated!\n You can check it on "Logpath and Config" page.')
        }
        else
        {
            alert('Please give all required parameters')
        }

    }

}
